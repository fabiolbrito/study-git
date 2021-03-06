// mylibrary.js
var myLibrary = {

    makeStartRefresher: function(teste) {
        return teste;
    },
    getZipCode: function(){
        return Math. floor(Math. random() * 100000000);
    },
    getName: function(){
        
        var obj = {
            firstName: pm.variables.replaceIn('{{$randomFirstName}}'),
            lastName: pm.variables.replaceIn('{{$randomLastName}}')
        }
        return obj;
    },
    getRandomInt: function(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    },
    getState: function(){

        var state = [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ]

        var random = state[this.getRandomInt(0, state.length + 1)];

        var obj = {
            name: random.name,
            abbreviation: random.abbreviation
        }
        return obj;
    },getCustomer: function(sellerId) {

        var address = {
            street : pm.variables.replaceIn('{{$randomStreetName}}'),
            number : pm.variables.replaceIn('{{$randomInt}}'),
            complement : pm.variables.replaceIn('{{$randomStreetName}}'),
            district : pm.variables.replaceIn('{{$randomLoremWord}}'),
            city: pm.variables.replaceIn('{{$randomCity}}'), 
            state : this.getState().abbreviation,
            country: pm.variables.replaceIn('{{$randomCountry}}'),
            postal_code : this.getZipCode()
        }

        var obj = {
            seller_id: sellerId,
            customer_id: pm.variables.replaceIn('{{$randomUUID}}'),
            first_name: pm.variables.replaceIn('{{$randomFirstName}}'),
            last_name: pm.variables.replaceIn('{{$randomLastName}}'),
            document_type: "CPF",
            document_number: "12345678912",
            birth_date : "1976-02-21",
            phone_number: pm.variables.replaceIn('{{$randomPhoneNumber}}'),
            celphone_number: pm.variables.replaceIn('{{$randomPhoneNumber}}'),
            email: pm.variables.replaceIn('{{$randomEmail}}'),
            observation : pm.variables.replaceIn('{{$randomLoremSentence}}'), 
            address : address
        }
        return obj;

    }
}
