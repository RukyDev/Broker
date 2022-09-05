/*
==================================================================
code for page by country
==================================================================

var data =  { 
    "usStocks":[
        {
        "name": "ALIBABA",
        "date" : "10/11/2018"
        },
        {
        "name": "AMAZON.COM INC",
        "date" : "10/11/2018"
        },
        {
        "name": "AMDOCS LTD",
        "date" : "10/11/2018"
        },
        {
        "name": "AMERICAN EXPRESS CO",
        "date" : "10/11/2018"
        }
    ],
    "uk":[
    
        {
        "name": "TESCO PLC ",
        "date" : "10/11/2018"
        },
        {
        "name": "CITIGROUP INC",
        "date" : "10/11/2018"
        },
        {
        "name": "JPMORGAN CHASE & CO",
        "date" : "10/11/2018"
        },
        {
        "name": "BANK OF AMERICA CORP",
        "date" : "10/11/2018"
        }
    ],

    "german":[

        {
        "name": "ANGLO AMERICAN PLC",
        "date" : "10/11/2018"
        },
        {
        "name": "BARCLAYS PLC",
        "date" : "10/11/2018"
        },
        {
        "name": "BHP BILLITON LTD",
        "date" : "10/11/2018"
        },
        {
        "name": "BP PLC",
        "date" : "10/11/2018"
        }
    ],
        
    "france":[
        
        {
            "name": "ANGLO AMERICAN PLC",
            "date" : "10/11/2018"
        },
        {
            "name": "BARCLAYS PLC",
            "date" : "10/11/2018"
        },
        {
            "name": "BHP BILLITON LTD",
            "date" : "10/11/2018"
        },
        {
            "name": "BP PLC",
            "date" : "10/11/2018"
        }
    ],

    "spain":[
        
        {
        "name": "ANGLO AMERICAN PLC",
        "date" : "10/11/2018"
        },
        {
        "name": "BARCLAYS PLC",
        "date" : "10/11/2018"
        },
        {
        "name": "BHP BILLITON LTD",
        "date" : "10/11/2018"
        },
        {
        "name": "BP PLC",
        "date" : "10/11/2018"
        }
    ]
  };
jQuery(function (jQuery) {
  console.log("starting:" + jQuery('table#usStocks').length);
  
for (var i =0; i < data.usStocks.length;i++) {
    jQuery('table#usStocks').append("<tr><td>" + data.usStocks[i].name + "</td><td>" + data.usStocks[i].date + "</td></tr>");
}
for (var i =0; i < data.uk.length;i++) {
    jQuery('table#UK').append("<tr><td>" + data.uk[i].name + "</td><td>" + data.uk[i].date + "</td></tr>");
}
for (var i =0; i < data.german.length;i++) {
    jQuery('table#German').append("<tr><td>" + data.german[i].name + "</td><td>" + data.german[i].date + "</td></tr>");
}
});
//etc.
*/
/*
==================================================================
code for page by stocks
==================================================================
*/
jQuery(document).ready(function (jQuery) {
	const data = {
		Stocks: [
			{
				name: "Huazhu Group Ltd Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "Covestro AG Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "ZTO Express (Cayman) Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Taiwan Semiconductor Manufacturing Co Ltd Earnings Release",
				date: "07/13/2022",
			},
			{
				name: "China Southern Airlines Co Ltd Earnings Release",
				date: "08/25/2022",
			},
			{
				name: "China Eastern Airlines Corp Ltd Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "China Mobile Ltd Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "China Life Insurance Co Ltd Earnings Release",
				date: "08/25/2022",
			},
			{
				name: "Sony Group Corp Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "JD.Com Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "GDS Holdings Ltd Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Weibo Corp Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Trip.com Group Ltd Earnings Release",
				date: "09/21/2022",
			},
			{
				name: "Agilent Technologies Inc Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Anglo American PLC Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "American Airlines Group Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Advance Auto Parts Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "Apple Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Abbvie Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Amerisourcebergen Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "ABIOMED Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Airbnb Inc Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "Abbott Laboratories Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Barrick Gold Corp Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "ACADIA Pharmaceuticals Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Aurora Cannabis Inc Earnings Release",
				date: "09/26/2022",
			},
			{
				name: "Accor SA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Arch Capital Group Ltd Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Adobe Inc Earnings Release",
				date: "09/15/2022",
			},
			{
				name: "Airbnb Inc Earnings Release",
				date: "05/11/2022",
			},
			{
				name: "Analog Devices Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Archer-Daniels-Midland Co Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Automatic Data Processing Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Adidas AG Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Autodesk Inc Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Ameren Corp Earnings Release - Tentative",
				date: "08/04/2022",
			},
			{
				name: "American Electric Power Company Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "AES Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Aflac Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "AGNC Investment Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "American International Group Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Airbus SE Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Apartment Investment and Management Co Earnings Release",
				date: "08/11/2022",
			},
			{
				name: "Assurant Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Arthur J Gallagher & Co Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Akamai Technologies Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Albemarle Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Align Technology Inc Earnings Release (Tentative)",
				date: "07/27/2022",
			},
			{
				name: "Alaska Air Group Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Allstate Corp Earnings Release (Tentative)",
				date: "08/03/2022",
			},
			{
				name: "Allegion PLC Earnings Release",
				date: "07/22/2022",
			},
			{
				name: "Ally Financial Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Alnylam Pharmaceuticals Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Allianz SE Earnings Release",
				date: "08/05/2022",
			},
			{
				name: "Applied Materials Inc Earnings Release",
				date: "08/18/2022",
			},
			{
				name: "AMC Entertainment Holdings Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Advanced Micro Devices Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "AMETEK Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Amedisys Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Affiliated Managers Group Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Amgen Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Ameriprise Financial Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Amneal Pharmaceuticals Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "American Tower Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Amazon.com Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Acciona SA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Arista Networks Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "ANSYS Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Anthem Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Aon PLC Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "APA Corp (US) Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Air Products and Chemicals Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Amphenol Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Alexandria Real Estate Equities Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Aramark Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Arconic Corp (PITTSBURGH) Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Arrowhead Pharmaceuticals Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "ASML Holding NV Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Atlantia SpA Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Atmos Energy Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Altice USA Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Activision Blizzard Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Avalonbay Communities Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Broadcom Inc Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "Avalara Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Avantor Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Avery Dennison Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "American Water Works Company Inc Earnings Release (Projected)",
				date: "07/27/2022",
			},
			{
				name: "AXA SA Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Axon Enterprise Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "American Express Co Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Alteryx Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Autozone Inc Earnings Release",
				date: "09/19/2022",
			},
			{
				name: "Boeing Co Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Bank of America Corp Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Booz Allen Hamilton Holding Corp Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Ball Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Barclays PLC Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "BASF SE Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "British American Tobacco PLC Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Baxter International Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Bayer AG Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Bed Bath & Beyond Inc Earnings Release",
				date: "09/28/2022",
			},
			{
				name: "Banco Bilbao Vizcaya Argentaria SA Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Bath & Body Works Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Best Buy Co Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "BCE Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Becton Dickinson and Co Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Beiersdorf AG Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Franklin Resources Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Brown-Forman Corp Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "Bread Financial Holdings Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "BHP Group Ltd Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "BHP Group PLC Earnings Release",
				date: "08/14/2022",
			},
			{
				name: "Baidu Inc Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "Biogen Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Bilibili Inc Earnings Release",
				date: "08/17/2022",
			},
			{
				name: "Bio Rad Laboratories Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "BJ's Wholesale Club Holdings Inc Earnings Release",
				date: "08/17/2022",
			},
			{
				name: "Bank of New York Mellon Corp Earnings Release",
				date: "07/15/2022",
			},
			{
				name: "Black Knight Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Booking Holdings Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "BlackRock Inc Earnings Release",
				date: "07/12/2022",
			},
			{
				name: "bluebird bio Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Bank of Montreal Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "Biomarin Pharmaceutical Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Bayerische Motoren Werke AG Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Bristol-Myers Squibb Co Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "BNP Paribas SA Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Bank of Nova Scotia Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "BioNTech SE Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "BP PLC Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Broadridge Financial Solutions Inc Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "Berkshire Hathaway Inc Earnings Release",
				date: "08/05/2022",
			},
			{
				name: "Brown & Brown Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Boston Scientific Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "BT Group PLC Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Burlington Stores Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Borgwarner Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "BT Group PLC Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Burlington Stores Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Borgwarner Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Blackstone Group Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Boston Properties Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Beyond Meat Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Citigroup Inc Earnings Release",
				date: "07/15/2022",
			},
			{
				name: "Credit Acceptance Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Conagra Brands Inc Earnings Release",
				date: "07/14/2022",
			},
			{
				name: "Credit Agricole SA Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Conagra Brands Inc Earnings Release",
				date: "07/14/2022",
			},
			{
				name: "Credit Agricole SA Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Cardinal Health Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Canaan Inc Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Avis Budget Group Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Carrier Global Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Carrefour SA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Casino Guichard Perrachon SA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Caseys General Stores Inc Earnings Release",
				date: "09/05/2022",
			},
			{
				name: "Caterpillar Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Commerzbank AG Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Cboe Global Markets Inc Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "CBRE Group Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Cracker Barrel Old Country Store Inc Earnings Release",
				date: "09/19/2022",
			},
			{
				name: "Crown Castle International Corp Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Crown Holdings Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Crown Holdings Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Carnival Corp Earnings Release",
				date: "09/22/2022",
			},
			{
				name: "Ceridian HCM Holding Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Cadence Design Systems Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "CDW Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Celanese Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Cerner Corp Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "CF Industries Holdings Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Citizens Financial Group Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Cognex Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Church & Dwight Co Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Chegg Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Check Point Software Technologies Ltd Earnings Releas",
				date: "07/25/2022",
			},
			{
				name: "CH Robinson Worldwide Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Charter Communications Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Chewy Inc Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "Cigna Corp Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Ciena Corp Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "Cineworld Group PLC Earnings Release",
				date: "09/22/2022",
			},
			{
				name: "Cincinnati Financial Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Colgate-Palmolive Co Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Clorox Co Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Canadian Imperial Bank of Commerce Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Comerica Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Comcast Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "CME Group Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Chipotle Mexican Grill Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Cummins Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "CMS Energy Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Centene Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "CenterPoint Energy Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Canadian Natural Resources Ltd Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Canadian National Railway Co Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Capital One Financial Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Coinbase Global Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Continental AG Earnings Release",
				date: "08/09/2022",
			},
			{
				name: "Cooper Companies Inc Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "Costco Wholesale Corp Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "Costco Wholesale Corp Earnings Release",
				date: "09/22/2022",
			},
			{
				name: "Coty Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Coupa Software Inc Earnings Release",
				date: "09/05/2022",
			},
			{
				name: "Canadian Pacific Railway Ltd Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Campbell Soup Co Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "Copart Inc Earnings Release",
				date: "09/06/2022",
			},
			{
				name: "Catalyst Pharmaceuticals Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Camden Property Trust Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "UniCredit SpA Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "UniCredit SpA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "CRH PLC Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Salesforce.Com Inc Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Cronos Group Inc Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Cirrus Logic Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "CrowdStrike Holdings Inc Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Cisco Systems Inc Earnings Release",
				date: "08/17/2022",
			},
			{
				name: "CoStar Group Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Carlisle Companies Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "CSX Corp Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Cintas Corp Earnings Release",
				date: "09/27/2022",
			},
			{
				name: "Q4 Cintas Corp Earnings Release",
				date: "07/13/2022",
			},
			{
				name: "Catalent Inc Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Coterra Energy Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Cognizant Technology Solutions Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Corteva Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Citrix Systems Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Carvana Co Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "CVS Health Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Chevron Corp Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Cyberark Software Ltd Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "Caesars Entertainment Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Dominion Energy Inc Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Delta Air Lines Inc Earnings Release",
				date: "07/12/2022",
			},
			{
				name: "Danone SA Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Deutsche Boerse AG Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Deutsche Bank AG Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Dropbox Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Dupont De Nemours Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Datadog Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Deere & Co Earnings Release",
				date: "08/19/2022",
			},
			{
				name: "Deckers Outdoor Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Dell Technologies Inc Earnings Release",
				date: "08/25/2022",
			},
			{
				name: "Discover Financial Services Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Dollar General Corp Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Diageo PLC Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Quest Diagnostics Inc Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "D R Horton Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Danaher Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Walt Disney Co Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "DISH Network Corp Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "DICK'S Sporting Goods Inc Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Digital Realty Trust Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Dollar Tree Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "DocuSign Inc Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "Dover Corp Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Dow Inc Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Amdocs Ltd Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Deutsche Post AG Earnings Release",
				date: "08/05/2022",
			},
			{
				name: "Domino's Pizza Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Duke Realty Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Darden Restaurants Inc Earnings Release",
				date: "09/21/2022",
			},
			{
				name: "Dynatrace Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "DTE Energy Co Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Deutsche Telekom AG Earnings Release",
				date: "08/11/2022",
			},
			{
				name: "Duke Energy Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "DaVita Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Dynavax Technologies Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Devon Energy Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "DXC Technology Co Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Dexcom Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Electronic Arts Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "eBay Inc Earnings Release",
				date: "08/09/2022",
			},
			{
				name: "Ecolab Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Consolidated Edison Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "New Oriental Education & Technology Group Inc Earnings Release",
				date: "09/12/2022",
			},
			{
				name: "Euronet Worldwide Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Equifax Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "eHealth Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Edison International Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Estee Lauder Companies Inc Earnings Release",
				date: "08/18/2022",
			},
			{
				name: "Elanco Animal Health Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Endesa SA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Equity LifeStyle Properties Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Eastman Chemical Co Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Emerson Electric Co Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Enbridge Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Enel SpA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Engie SA Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Eni SpA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Enphase Energy Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Entegris Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "EOG Resources Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "E.ON SE Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "E.ON SE Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "Epam Systems Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Enterprise Products Partners LP Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Equitable Holdings Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Equinix Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Equity Residential Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Eversource Energy Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Enstar Group Ltd Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Essex Property Trust Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Elastic NV Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Energy Transfer LP Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Entergy Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "ETSY Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Everbridge Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Evergy Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Edwards Lifesciences Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "East West Bancorp Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Exact Sciences Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Exelon Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Exelixis Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Exor NV Earnings Release",
				date: "09/07/2022",
			},
			{
				name: "Expeditors International of Washington Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Expedia Group Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Ford Motor Co Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Diamondback Energy Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Fastenal Co Earnings Release",
				date: "07/13/2022",
			},
			{
				name: "Fortune Brands Home & Security Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Fuelcell Energy Inc Earnings Release",
				date: "09/12/2022",
			},
			{
				name: "Freeport-McMoRan Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Factset Research Systems Inc Earnings Release",
				date: "09/26/2022",
			},
			{
				name: "FedEx Corp Earnings Release",
				date: "09/19/2022",
			},
			{
				name: "FirstEnergy Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "F5 Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Fair Isaac Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Fidelity National Information Services Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Fiserv Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Fifth Third Bancorp Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Five Below Inc Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "Five9 Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Foot Locker Inc Earnings Release",
				date: "08/18/2022",
			},
			{
				name: "Fluor Corp Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Flowserve Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Fleetcor Technologies Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Flutter Entertainment PLC Earnings Release",
				date: "08/09/2022",
			},
			{
				name: "FMC Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Fidelity National Financial Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Fox Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "First Republic Bank Earnings Release",
				date: "07/11/2022",
			},
			{
				name: "Fresenius SE & Co KGaA Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Federal Realty Investment Trust Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "First Solar Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Fastly Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Fortinet Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Fortive Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Assicurazioni Generali SpA Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Global Blood Therapeutics Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "General Dynamics Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "GoDaddy Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "General Electric Co Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Guardant Health Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Gilead Sciences Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "General Mills Inc Earnings Release",
				date: "09/20/2022",
			},
			{
				name: "Globe Life Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Glencore PLC Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Gaming and Leisure Properties Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Corning Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "General Motors Co Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Generac Holdings Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Gentex Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Alphabet Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Gaotu Techedu Inc Earnings Release",
				date: "09/20/2022",
			},
			{
				name: "Genuine Parts Co Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Global Payments Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "GoPro Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Gap Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Groupon Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Goldman Sachs Group Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "GlaxoSmithKline PLC Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Great-West Lifeco Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Guidewire Software Inc Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "Grainger Inc Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Halliburton Co Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Hasbro Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Huntington Bancshares Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "HanesBrands Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "HCA Healthcare Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Home Depot Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "HeidelbergCement AG Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Hess Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Hartford Financial Services Group Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Huntington Ingalls Industries Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Hilton Worldwide Holdings Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Henkel AG & Co KGaA Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Harley-Davidson Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Hologic Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Honeywell International Inc Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Helmerich and Payne Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Hewlett Packard Enterprise Co Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "HP Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Healthequity Inc Earnings Release",
				date: "09/06/2022",
			},
			{
				name: "H & R Block Inc Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Hormel Foods Corp Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "HSBC Holdings PLC Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Henry Schein Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Host Hotels & Resorts Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Hershey Co Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "HubSpot Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Humana Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Howmet Aerospace Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Horizon Therapeutics PLC Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "IAC/Interactivecorp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Iberdrola SA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "International Business Machines Corp Earnings Release (Preliminary)",
				date: "07/18/2022",
			},
			{
				name: "International Consolidated Airlines Group SA Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "IDEXX Laboratories Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "IDEX Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "International Flavors & Fragrances Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Infineon Technologies AG Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "IG Group Holdings PLC Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "II-VI Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Illumina Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Incyte Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Inovio Pharmaceuticals Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Intel Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Reorganized ISA SA Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Intuit Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "Invitation Homes Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "International Paper Co Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Interpublic Group of Companies Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "IPG Photonics Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "iQIYI Inc Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "IQVIA Holdings Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Ingersoll Rand Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "iRobot Corp Earnings Release - Tentative",
				date: "08/03/2022",
			},
			{
				name: "Iron Mountain Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Intesa Sanpaolo SpA Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Intuitive Surgical Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Gartner Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "ITV PLC Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Illinois Tool Works Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Industria de Diseno Textil SA Earnings Release",
				date: "09/14/2022",
			},
			{
				name: "Invesco Mortgage Capital Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Invesco Ltd Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Jacobs Engineering Group Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "J B Hunt Transport Services Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "JetBlue Airways Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Jefferies Financial Group Inc Earnings Release",
				date: "09/28/2022",
			},
			{
				name: "Jack Henry & Associates Inc Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Johnson & Johnson Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Juniper Networks Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "JPMorgan Chase & Co Earnings Release",
				date: "07/14/2022",
			},
			{
				name: "Nordstrom Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "Kellogg Co Earnings Release (Tentative)",
				date: "08/04/2022",
			},
			{
				name: "Keurig Dr Pepper Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "KeyCorp Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Keysight Technologies Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Kingfisher PLC Earnings Release",
				date: "09/20/2022",
			},
			{
				name: "Kraft Heinz Co Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Kimco Realty Corp Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "KLA Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Kimberly-Clark Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Kinder Morgan Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Carmax Inc Earnings Release",
				date: "09/28/2022",
			},
			{
				name: "Knight-Swift Transportation Holdings Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Coca-Cola Co Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Eastman Kodak Co Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Kosmos Energy Ltd Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Kroger Co Earnings Release",
				date: "09/08/2022",
			},
			{
				name: "Kohls Corp Earnings Release",
				date: "08/17/2022",
			},
			{
				name: "Leonardo SpA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Leidos Holdings Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Lear Corp Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Leggett & Platt Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Lennar Corp Earnings Release",
				date: "09/19/2022",
			},
			{
				name: "Levi Strauss & Co Earnings Release",
				date: "07/06/2022",
			},
			{
				name: "Laboratory Corporation of America Holdings Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Deutsche Lufthansa AG Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "LHC Group Inc Earnings Release",
				date: "08/2/2022",
			},
			{
				name: "Lennox International Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Lumentum Holdings Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "LKQ Corp Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Lloyds Banking Group PLC Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Eli Lilly and Co Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Lockheed Martin Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Lincoln National Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Alliant Energy Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Grand Canyon Education Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Lowe's Companies Inc Earnings Release (Estimate)",
				date: "08/17/2022",
			},
			{
				name: "LPL Financial Holdings Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Lam Research Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Lululemon Athletica Inc Earnings Release",
				date: "09/06/2022",
			},
			{
				name: "Lumen Technologies Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Southwest Airlines Co Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "LVMH Moet Hennessy Louis Vuitton SE Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Las Vegas Sands Corp Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Lamb Weston Holdings Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "LyondellBasell Industries NV Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Lyft Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Live Nation Entertainment Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Macy's Inc Earnings Release",
				date: "08/17/2022",
			},
			{
				name: "Mastercard Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Mid-America Apartment Communities Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Macerich Co Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Marriott International Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Masco Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Masimo Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Mattel Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Mercedes-Benz Group AG Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Mcdonald's Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Mcafee Corp Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Microchip Technology Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Mckesson Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Moody's Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "MongoDB Inc Earnings Release",
				date: "08/31/2022",
			},
			{
				name: "Mediobanca Banca di Credito Finanziario SpA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Mondelez International Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Medtronic PLC Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Mercadolibre Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "MetLife Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Meta Platforms Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "MFA Financial Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Manulife Financial Corp Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "MoneyGram International Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "MGM Resorts International Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Mohawk Industries Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Compagnie Generale des Etablissements Michelin SCA Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Middleby Corp Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "McCormick & Company Inc Earnings Release",
				date: "09/28/2022",
			},
			{
				name: "Markel Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Marketaxess Holdings Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Martin Marietta Materials Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Marsh & McLennan Companies Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "3M Co Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Monster Beverage Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Altria Group Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Molina Healthcare Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Hello Group Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Mosaic Co Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Marathon Petroleum Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Medical Properties Trust Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Monolithic Power Systems Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Merck & Co Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Moderna Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Mirati Therapeutics Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Marvell Technology Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Morgan Stanley Earnings Release",
				date: "07/14/2022",
			},
			{
				name: "MSCI Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Microsoft Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Motorola Solutions Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "M&T Bank Corp Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Match Group Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Mettler-Toledo International Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Vail Resorts Inc Earnings Release",
				date: "09/21/2022",
			},
			{
				name: "Micron Technology Inc Earnings Release",
				date: "09/26/2022",
			},
			{
				name: "Muenchener Rueckversicherungs Gesellschaft AG in Muenchen Earnings Release",
				date: "08/09/2022",
			},
			{
				name: "Neurocrine Biosciences Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Norwegian Cruise Line Holdings Ltd Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Nasdaq Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Nordson Corp Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Nextera Energy Inc Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Newmont Corporation Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Cloudflare Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Netflix Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "NiSource Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "NIO Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Nike Inc Earnings Release",
				date: "09/21/2022",
			},
			{
				name: "Nikola Corporation Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Nektar Therapeutics Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "NortonLifeLock Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Nielsen Holdings PLC Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Annaly Capital Management Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Northrop Grumman Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Nokia Oyj Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Nov Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "ServiceNow Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "NRG Energy Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "New Residential Investment Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Norfolk Southern Corp Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "NetApp Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "NetEase Inc Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Nutanix Inc Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "Nutrien Ltd Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Northern Trust Corp Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Nucor Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Novocure Ltd Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "NVR Inc Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Natwest Group PLC Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Newell Brands Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "News Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "NXP Semiconductors NV Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Realty Income Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Oasis Petroleum Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Old Dominion Freight Line Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Omega Healthcare Investors Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "ONEOK Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Okta Inc Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "Universal Display Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Ollie's Bargain Outlet Holdings Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Omnicom Group Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Owens & Minor Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "ON Semiconductor Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Orange SA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Oracle Corp Earnings Release",
				date: "09/12/2022",
			},
			{
				name: "L'Oreal SA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "O'Reilly Automotive Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Overstock.com Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Otis Worldwide Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Occidental Petroleum Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Pan American Silver Corp Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Palo Alto Networks Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "Paramount Global Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Paycom Software Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Paychex Inc Earnings Release",
				date: "09/28/2022",
			},
			{
				name: "People's United Financial Inc Earnings Release (Tentative)",
				date: "07/21/2022",
			},
			{
				name: "Paccar Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "PG&E Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Paylocity Holding Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Pinduoduo Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "Healthpeak Properties Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Public Service Enterprise Group Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Penn National Gaming Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "PepsiCo Inc Earnings Release",
				date: "07/12/2022",
			},
			{
				name: "Pfizer Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Principal Financial Group Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Procter & Gamble Co Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Progressive Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Parker-Hannifin Corp Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Pultegroup Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Polaris Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Pinterest Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Pirelli & C SpA Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Packaging Corp of America Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "PerkinElmer Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Anaplan Inc Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Dave & Buster's Entertainment Inc Earnings Release",
				date: "09/07/2022",
			},
			{
				name: "Prologis Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Planet Fitness Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Palantir Technologies Inc Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "Plug Power Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Plus500 Ltd Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Philip Morris International Inc Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "PNC Financial Services Group Inc Earnings Release",
				date: "07/15/2022",
			},
			{
				name: "Pentair PLC Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Pinnacle West Capital Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Insulet Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Pool Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "PPG Industries Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "PPL Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Prudential PLC Earnings Release",
				date: "08/09/2022",
			},
			{
				name: "Prudential Financial Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Public Storage Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Prospect Capital Corp Earnings Release",
				date: "04/25/2022",
			},
			{
				name: "Porsche Automobil Holding SE Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Poste Italiane SpA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Phillips 66 Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "PTC Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Peloton Interactive Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Puma SE Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "PVH Corp Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Quanta Services Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Pioneer Natural Resources Co Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "PayPal Holdings Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Papa John's International Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Qualcomm Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Qorvo Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Ferrari NV Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Royal Caribbean Cruises Ltd Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Everest Re Group Ltd Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Regency Centers Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Regeneron Pharmaceuticals Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Renault SA Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "Repsol SA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Reata Pharmaceuticals Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Regions Financial Corp Earnings Release",
				date: "07/22/2022",
			},
			{
				name: "Reinsurance Group of America Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Repligen Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Royal Gold Inc Earnings Release",
				date: "08/09/2022",
			},
			{
				name: "RH Earnings Release",
				date: "09/06/2022",
			},
			{
				name: "Robert Half International Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Rio Tinto PLC Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Raymond James Financial Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Rocket Companies Inc Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "Ralph Lauren Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Resmed Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "RingCentral Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Renaissancere Holdings Ltd Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Rockwell Automation Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Roku Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Rollins Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Roper Technologies Inc Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Ross Stores Inc Earnings Release",
				date: "08/17/2022",
			},
			{
				name: "Rolls-Royce Holdings PLC Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Republic Services Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Raytheon Technologies Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Sunrun Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "RWE AG Earnings Release",
				date: "08/11/2022",
			},
			{
				name: "Royal Bank of Canada Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Ryanair Holdings PLC Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Banco de Sabadell SA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Sanderson Farms Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Boston Beer Company Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Banco Santander SA Earnings Release",
				date: "05/02/2022",
			},
			{
				name: "SAP SE Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Sanofi SA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Spirit Airlines Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "SBA Communications Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Starbucks Corp Earnings Release (Tentative)",
				date: "08/02/2022",
			},
			{
				name: "Charles Schwab Corp Earnings Release",
				date: "07/14/2022",
			},
			{
				name: "Sea Ltd Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Solaredge Technologies Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Sealed Air Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Seagen Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Shake Shack Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Shell PLC Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Shopify Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Sherwin-Williams Co Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Siemens AG Earnings Release",
				date: "08/11/2022",
			},
			{
				name: "Sirius XM Holdings Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "SVB Financial Group Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "J M Smucker Co Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Schlumberger NV Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "SL Green Realty Corp Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Snap-On Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Snap Inc Earnings Release",
				date: "05/17/2022",
			},
			{
				name: "Snowflake Inc. Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Synopsys Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Southern Co Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Societe Generale SA Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Virgin Galactic Holdings Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Simon Property Group Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "S&P Global Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Splunk Inc Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Saipem SpA Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Spotify Technology SA Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Spirit AeroSystems Holdings Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Block Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Sempra Energy Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Snam SpA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Sarepta Therapeutics Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "SS&C Technologies Holdings Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "STERIS plc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Stellantis NV Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Steel Dynamics Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "StoneCo Ltd Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "STORE Capital Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "State Street Corp Earnings Release",
				date: "07/14/2022",
			},
			{
				name: "Seagate Technology Holdings PLC Earnings Release",
				date: "07/19/2022",
			},
			{
				name: "Suncor Energy Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Skyworks Solutions Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Synchrony Financial Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Stryker Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Sysco Corp Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "AT&T Inc Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Telus Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Molson Coors Beverage Co Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Toronto-Dominion Bank Earnings Release",
				date: "08/25/2022",
			},
			{
				name: "TransDigm Group Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Teladoc Health Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Teledyne Technologies Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Telefonica SA Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Tenaris SA Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Teradyne Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Teva Pharmaceutical Industries Ltd Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Teleflex Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Target Corp Earnings Release",
				date: "08/17/2022",
			},
			{
				name: "TJX Companies Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Thyssenkrupp AG Earnings Release",
				date: "08/11/2022",
			},
			{
				name: "Telecom Italia SpA Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Tilray Brands Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Tencent Music Entertainment Group Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "Thermo Fisher Scientific Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Tandem Diabetes Care Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Toll Brothers Inc Earnings Release",
				date: "08/22/2022",
			},
			{
				name: "Tapestry Inc Earnings Release",
				date: "08/18/2022",
			},
			{
				name: "Trex Company Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Tripadvisor Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "T Rowe Price Group Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "TC Energy Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "TransUnion Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Travelers Companies Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Tractor Supply Co Earnings Release",
				date: "07/21/2022",
			},
			{
				name: "Tesla Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Tyson Foods Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Trade Desk Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "TotalEnergies SE Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Take-Two Interactive Software Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Taylor Wimpey PLC Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Twilio Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Twitter Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "10X Genomics Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "TherapeuticsMD Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Texas Instruments Inc Earnings Release",
				date: "04/27/2022",
			},
			{
				name: "Texas Roadhouse Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Textron Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Under Armour Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "United Airlines Holdings Inc Earnings Release",
				date: "07/18/2022",
			},
			{
				name: "Uber Technologies Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "UDR Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Universal Health Services Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Ulta Beauty Inc Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "Unilever PLC Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "UnitedHealth Group Inc Earnings Release",
				date: "07/15/2022",
			},
			{
				name: "Unum Group Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Union Pacific Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "United Parcel Service Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "United Rentals Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "U.S. Bancorp Earnings Release",
				date: "07/15/2022",
			},
			{
				name: "United Therapeutics Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Visa Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Veeva Systems Inc Earnings Release",
				date: "08/30/2022",
			},
			{
				name: "VF Corp Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "VICI Properties Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Vipshop Holdings Ltd Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Vir Biotechnology Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Vallourec SA Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Valero Energy Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Vulcan Materials Co Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "VMware Inc Earnings Release",
				date: "08/25/2022",
			},
			{
				name: "Vonovia SE Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Vornado Realty Trust Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Vontier Corp Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Vodafone Group PLC Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Volkswagen AG Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Verisk Analytics Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Verisign Inc Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Vertex Pharmaceuticals Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Vistra Corp Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Ventas Inc Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Viatris Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Vaxart Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Verizon Communications Inc. Earnings Release",
				date: "07/22/2022",
			},
			{
				name: "Wayfair Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Westinghouse Air Brake Technologies Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Waters Corp Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Waste Connections Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Workday Inc Earnings Release",
				date: "08/24/2022",
			},
			{
				name: "Western Digital Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "WEC Energy Group Inc Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Canopy Growth Corp Earnings Release",
				date: "08/04/2022",
			},
			{
				name: "Welltower Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Wendys Co Earnings Release",
				date: "08/10/2022",
			},
			{
				name: "WEX Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Wells Fargo & Co Earnings Release",
				date: "07/15/2022",
			},
			{
				name: "Whirlpool Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Wingstop Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Wix.Com Ltd Earnings Release",
				date: "08/09/2022",
			},
			{
				name: "Workhorse Group Inc Earnings Release",
				date: "08/08/2022",
			},
			{
				name: "Waste Management Inc Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Williams Companies Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Walmart Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Wolfspeed Inc Earnings Release",
				date: "08/15/2022",
			},
			{
				name: "WP Carey Inc Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "W R Berkley Corp Earnings Release",
				date: "07/20/2022",
			},
			{
				name: "Westrock Co Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Williams-Sonoma Inc Earnings Release",
				date: "08/23/2022",
			},
			{
				name: "West Pharmaceutical Services Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Essential Utilities Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Willis Towers Watson PLC Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Western Union Co Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Weyerhaeuser Co Earnings Release",
				date: "07/28/2022",
			},
			{
				name: "Wynn Resorts Ltd Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "United States Steel Corp Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Xcel Energy Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Exxon Mobil Corp Earnings Release",
				date: "07/29/2022",
			},
			{
				name: "XPO Logistics Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "DENTSPLY SIRONA Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Xerox Holdings Corp Earnings Release",
				date: "07/25/2022",
			},
			{
				name: "Xylem Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Yelp Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Yandex NV Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Yum! Brands Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "Yum China Holdings Inc Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "JOYY Inc Earnings Release",
				date: "08/16/2022",
			},
			{
				name: "Zimmer Biomet Holdings Inc Earnings Release",
				date: "08/01/2022",
			},
			{
				name: "Zebra Technologies Corp Earnings Release",
				date: "08/02/2022",
			},
			{
				name: "Zendesk Inc Earnings Release",
				date: "07/27/2022",
			},
			{
				name: "Zions Bancorporation NA Earnings Release",
				date: "07/26/2022",
			},
			{
				name: "Zoom Video Communications Inc Earnings Release",
				date: "08/29/2022",
			},
			{
				name: "Zscaler Inc Earnings Release",
				date: "09/07/2022",
			},
			{
				name: "Zoetis Inc Earnings Release",
				date: "08/03/2022",
			},
			{
				name: "VF Corp Earnings Release",
				date: "05/19/2022",
			},
		],
	};

	//console.log("starting:" + jQuery('table#Stocks').length);
	for (let i = 0; i < data.Stocks.length; i++) {
		jQuery("table#Stocks").append(
			"<tr><td>" + data.Stocks[i].name + "</td><td>" + data.Stocks[i].date + "</td></tr>"
		);
	}
});
