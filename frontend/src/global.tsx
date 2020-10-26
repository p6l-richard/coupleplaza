// TYPE INTERFACES

export interface Region {
    id: number
    , name: string
}
export interface Country {
    id: number
    , isoCode2: string
    , isoCode3: string
    , name: string
    , region: Region
    , regionId: number
}
export interface Visa {
    costs: number
    , id: number
    , issuingCountry: Country
    , issuingCountryId: number
    , name: string
    , validCountries: Country[]
    , validity: number
}


// DUMMY DATA

export const dummyVisa = `
{
    "costs": 295,
    "id": 65,
    "issuingCountry": {
        "id": 9,
        "isoCode2": "AU",
        "isoCode3": "AUS",
        "name": "Australia",
        "region": {
            "id": 6,
            "name": "Oceania"
        },
        "regionId": 6
    },
    "issuingCountryId": 9,
    "name": "working holiday visa",
    "validCountries": [
        {
            "id": 7,
            "isoCode2": "AR",
            "isoCode3": "ARG",
            "name": "Argentina",
            "region": {
                "id": 5,
                "name": "Latin America"
            },
            "regionId": 5
        },
        {
            "id": 10,
            "isoCode2": "AT",
            "isoCode3": "AUT",
            "name": "Austria",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 35,
            "isoCode2": "CL",
            "isoCode3": "CHL",
            "name": "Chile",
            "region": {
                "id": 5,
                "name": "Latin America"
            },
            "regionId": 5
        },
        {
            "id": 36,
            "isoCode2": "CN",
            "isoCode3": "CHN",
            "name": "China",
            "region": {
                "id": 2,
                "name": "Asia"
            },
            "regionId": 2
        },
        {
            "id": 44,
            "isoCode2": "CZ",
            "isoCode3": "CZE",
            "name": "Czechia",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 49,
            "isoCode2": "EC",
            "isoCode3": "ECU",
            "name": "Ecuador",
            "region": {
                "id": 5,
                "name": "Latin America"
            },
            "regionId": 5
        },
        {
            "id": 68,
            "isoCode2": "GR",
            "isoCode3": "GRC",
            "name": "Greece",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 77,
            "isoCode2": "HU",
            "isoCode3": "HUN",
            "name": "Hungary",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 80,
            "isoCode2": "ID",
            "isoCode3": "IDN",
            "name": "Indonesia",
            "region": {
                "id": 2,
                "name": "Asia"
            },
            "regionId": 2
        },
        {
            "id": 84,
            "isoCode2": "IL",
            "isoCode3": "ISR",
            "name": "Israel",
            "region": {
                "id": 8,
                "name": "Middle East"
            },
            "regionId": 8
        },
        {
            "id": 100,
            "isoCode2": "LU",
            "isoCode3": "LUX",
            "name": "Luxembourg",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 105,
            "isoCode2": "MY",
            "isoCode3": "MYS",
            "name": "Malaysia",
            "region": {
                "id": 2,
                "name": "Asia"
            },
            "regionId": 2
        },
        {
            "id": 134,
            "isoCode2": "PE",
            "isoCode3": "PER",
            "name": "Peru",
            "region": {
                "id": 5,
                "name": "Latin America"
            },
            "regionId": 5
        },
        {
            "id": 136,
            "isoCode2": "PL",
            "isoCode3": "POL",
            "name": "Poland",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 137,
            "isoCode2": "PT",
            "isoCode3": "PRT",
            "name": "Portugal",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 149,
            "isoCode2": "SG",
            "isoCode3": "SGP",
            "name": "Singapore",
            "region": {
                "id": 2,
                "name": "Asia"
            },
            "regionId": 2
        },
        {
            "id": 150,
            "isoCode2": "SK",
            "isoCode3": "SVK",
            "name": "Slovakia",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 151,
            "isoCode2": "SI",
            "isoCode3": "SVN",
            "name": "Slovenia",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 155,
            "isoCode2": "ES",
            "isoCode3": "ESP",
            "name": "Spain",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        {
            "id": 164,
            "isoCode2": "TH",
            "isoCode3": "THA",
            "name": "Thailand",
            "region": {
                "id": 2,
                "name": "Asia"
            },
            "regionId": 2
        },
        {
            "id": 169,
            "isoCode2": "TR",
            "isoCode3": "TUR",
            "name": "Turkey",
            "region": {
                "id": 8,
                "name": "Middle East"
            },
            "regionId": 8
        },
        {
            "id": 175,
            "isoCode2": "US",
            "isoCode3": "USA",
            "name": "United States of America",
            "region": {
                "id": 7,
                "name": "North America"
            },
            "regionId": 7
        },
        {
            "id": 176,
            "isoCode2": "UY",
            "isoCode3": "URY",
            "name": "Uruguay",
            "region": {
                "id": 5,
                "name": "Latin America"
            },
            "regionId": 5
        },
        {
            "id": 180,
            "isoCode2": "VN",
            "isoCode3": "VNM",
            "name": "Viet Nam",
            "region": {
                "id": 2,
                "name": "Asia"
            },
            "regionId": 2
        }
    ],
    "validity": 365
}`

export const dummyVisas = `
[
    {
        "costs": 295,
        "id": 65,
        "issuingCountry": {
            "id": 9,
            "isoCode2": "AU",
            "isoCode3": "AUS",
            "name": "Australia",
            "region": {
                "id": 6,
                "name": "Oceania"
            },
            "regionId": 6
        },
        "issuingCountryId": 9,
        "name": "working holiday visa",
        "validCountries": [
            {
                "id": 7,
                "isoCode2": "AR",
                "isoCode3": "ARG",
                "name": "Argentina",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            },
            {
                "id": 10,
                "isoCode2": "AT",
                "isoCode3": "AUT",
                "name": "Austria",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 35,
                "isoCode2": "CL",
                "isoCode3": "CHL",
                "name": "Chile",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            },
            {
                "id": 36,
                "isoCode2": "CN",
                "isoCode3": "CHN",
                "name": "China",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            },
            {
                "id": 44,
                "isoCode2": "CZ",
                "isoCode3": "CZE",
                "name": "Czechia",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 49,
                "isoCode2": "EC",
                "isoCode3": "ECU",
                "name": "Ecuador",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            },
            {
                "id": 68,
                "isoCode2": "GR",
                "isoCode3": "GRC",
                "name": "Greece",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 77,
                "isoCode2": "HU",
                "isoCode3": "HUN",
                "name": "Hungary",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 80,
                "isoCode2": "ID",
                "isoCode3": "IDN",
                "name": "Indonesia",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            },
            {
                "id": 84,
                "isoCode2": "IL",
                "isoCode3": "ISR",
                "name": "Israel",
                "region": {
                    "id": 8,
                    "name": "Middle East"
                },
                "regionId": 8
            },
            {
                "id": 100,
                "isoCode2": "LU",
                "isoCode3": "LUX",
                "name": "Luxembourg",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 105,
                "isoCode2": "MY",
                "isoCode3": "MYS",
                "name": "Malaysia",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            },
            {
                "id": 134,
                "isoCode2": "PE",
                "isoCode3": "PER",
                "name": "Peru",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            },
            {
                "id": 136,
                "isoCode2": "PL",
                "isoCode3": "POL",
                "name": "Poland",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 137,
                "isoCode2": "PT",
                "isoCode3": "PRT",
                "name": "Portugal",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 149,
                "isoCode2": "SG",
                "isoCode3": "SGP",
                "name": "Singapore",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            },
            {
                "id": 150,
                "isoCode2": "SK",
                "isoCode3": "SVK",
                "name": "Slovakia",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 151,
                "isoCode2": "SI",
                "isoCode3": "SVN",
                "name": "Slovenia",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 155,
                "isoCode2": "ES",
                "isoCode3": "ESP",
                "name": "Spain",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 164,
                "isoCode2": "TH",
                "isoCode3": "THA",
                "name": "Thailand",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            },
            {
                "id": 169,
                "isoCode2": "TR",
                "isoCode3": "TUR",
                "name": "Turkey",
                "region": {
                    "id": 8,
                    "name": "Middle East"
                },
                "regionId": 8
            },
            {
                "id": 176,
                "isoCode2": "UY",
                "isoCode3": "URY",
                "name": "Uruguay",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            },
            {
                "id": 175,
                "isoCode2": "US",
                "isoCode3": "USA",
                "name": "United States of America",
                "region": {
                    "id": 7,
                    "name": "North America"
                },
                "regionId": 7
            },
            {
                "id": 180,
                "isoCode2": "VN",
                "isoCode3": "VNM",
                "name": "Viet Nam",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            }
        ],
        "validity": 365
    },
    {
        "costs": 20,
        "id": 66,
        "issuingCountry": {
            "id": 3,
            "isoCode2": "AL",
            "isoCode3": "ALB",
            "name": "Albania",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        "issuingCountryId": 3,
        "name": "new visa",
        "validCountries": [
            {
                "id": 2,
                "isoCode2": "AF",
                "isoCode3": "AFG",
                "name": "Afghanistan",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            },
            {
                "id": 3,
                "isoCode2": "AL",
                "isoCode3": "ALB",
                "name": "Albania",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 4,
                "isoCode2": "DZ",
                "isoCode3": "DZA",
                "name": "Algeria",
                "region": {
                    "id": 4,
                    "name": "Africa"
                },
                "regionId": 4
            },
            {
                "id": 7,
                "isoCode2": "AR",
                "isoCode3": "ARG",
                "name": "Argentina",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            },
            {
                "id": 22,
                "isoCode2": "BO",
                "isoCode3": "BOL",
                "name": "Bolivia",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            }
        ],
        "validity": 123
    },
    {
        "costs": 29,
        "id": 67,
        "issuingCountry": {
            "id": 3,
            "isoCode2": "AL",
            "isoCode3": "ALB",
            "name": "Albania",
            "region": {
                "id": 3,
                "name": "Europe"
            },
            "regionId": 3
        },
        "issuingCountryId": 3,
        "name": "hello",
        "validCountries": [
            {
                "id": 2,
                "isoCode2": "AF",
                "isoCode3": "AFG",
                "name": "Afghanistan",
                "region": {
                    "id": 2,
                    "name": "Asia"
                },
                "regionId": 2
            },
            {
                "id": 3,
                "isoCode2": "AL",
                "isoCode3": "ALB",
                "name": "Albania",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 4,
                "isoCode2": "DZ",
                "isoCode3": "DZA",
                "name": "Algeria",
                "region": {
                    "id": 4,
                    "name": "Africa"
                },
                "regionId": 4
            },
            {
                "id": 5,
                "isoCode2": "AD",
                "isoCode3": "AND",
                "name": "Andorra",
                "region": {
                    "id": 3,
                    "name": "Europe"
                },
                "regionId": 3
            },
            {
                "id": 6,
                "isoCode2": "AO",
                "isoCode3": "AGO",
                "name": "Angola",
                "region": {
                    "id": 4,
                    "name": "Africa"
                },
                "regionId": 4
            },
            {
                "id": 7,
                "isoCode2": "AR",
                "isoCode3": "ARG",
                "name": "Argentina",
                "region": {
                    "id": 5,
                    "name": "Latin America"
                },
                "regionId": 5
            }
        ],
        "validity": 3
    }
]`

export const dummyImgs = {
    germany: 'https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
    , france: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
    , brazil: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1098&q=80'
    , australia: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    , albania: 'https://images.unsplash.com/photo-1567877424005-b91e7398e33e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
}

export const dummyCountry = `{
    "id": 2,
    "isoCode2": "AF",
    "isoCode3": "AFG",
    "name": "Afghanistan",
    "region": {
        "id": 2,
        "name": "Asia"
    },
    "regionId": 2
}`