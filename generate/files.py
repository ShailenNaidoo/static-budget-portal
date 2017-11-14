from ckanapi import RemoteCKAN
import os
from slugify import slugify
from models import *
import views

ckan = RemoteCKAN('https://treasurydata.openup.org.za')

years = {}


def get_department_packages(year_govt_group_id):
    response = ckan.action.package_search(fq="groups:%s" % year_govt_group_id)
    department_packages = response['results']

    while len(department_packages) < response['count']:
        response = ckan.action.package_search(
            fq="groups:%s" % year_govt_group_id,
            start=len(department_packages)
        )
        department_packages.extend(response['results'])

    return department_packages


# get all the data
for year_govt_group_id in ckan.action.group_list():
    print year_govt_group_id
    year_govt_group = ckan.action.group_show(id=year_govt_group_id)
    department_packages = get_department_packages(year_govt_group_id)

    year_id = extras_get(year_govt_group['extras'], 'Financial Year')
    if year_id not in years:
        year = FinancialYear(year_id)
        years[year_id] = year
    else:
        year = years[year_id]

    geographic_region_name = extras_get(year_govt_group['extras'], 'Geographic Region')
    if geographic_region_name not in year.provincial.governments:
        government = Government(geographic_region_name, year.provincial)
        year.provincial.governments[geographic_region_name] = government
    else:
        government = year.provincial.governments[geographic_region_name]

    for department_package in department_packages:
        department = Department.from_ckan_package(government, department_package)
        government.departments.append(department)


for year in years.keys():
    # department list data
    directory = "_data/%s/provincial" % year
    if not os.path.exists(directory):
        os.makedirs(directory)
    with open(os.path.join(directory, "department_list.yaml"), "wb") as outfile:
        views.DepartmentList(years[year].provincial).yaml(
            outfile, default_flow_style=False, encoding='utf-8')

    # # department list pages
    # directory = "%s" % year
    # if not os.path.exists(directory):
    #     os.makedirs(directory)
    # with open(os.path.join(directory, "departments.html"), "wb") as outfile:
    #     outfile.write("---\nfinancial_year: %s\nlayout: department_list\n---" % year)
    #
    # for geographic_region in years[year]['provincial'].keys():
    #     for department in years[year]['provincial'][geographic_region]:
    #         print department
    #         # department pages
    #         geographic_region_slug = department['geographic_region']['slug']
    #         directory = "%s/provincial/%s/departments" % (year, geographic_region_slug)
    #         if not os.path.exists(directory):
    #             os.makedirs(directory)
    #         with open(os.path.join(directory, "%s.html" % department['slug']), "wb") as outfile:
    #             outfile.write(
    #                 "---\n\
    #                 financial_year: %s\n\
    #                 sphere: provincial\n\
    #                 geographic_region_slug: %s\n\
    #                 department_slug: %s\n\
    #                 layout: department\n\
    #                 ---" % (year, geographic_region_slug, department['slug']))
