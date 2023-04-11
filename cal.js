var laborsAndFixedPriceCost = [
  {
    stillas: "14000",
    reise: "2000",
    festesystem: "23000",
    inverter: "19000",
    elektro: "5000",
  },
];
// [ "Area(m2)" , "No Of Panels" , "Price Per Panel", "Total Panel Price", "Total Cost" ] ,
var panelPriceAndNumberBasedOnArea = [
  ["1", "0", "5900", "5900", "68900"],
  ["2", "1", "5900", "5900", "68900"],
  ["3", "1", "5900", "5900", "68900"],
  ["4", "2", "5685", "11370", "74370"],
  ["5", "2", "5685", "11370", "74370"],
  ["6", "3", "5685", "17055", "80055"],
  ["7", "3", "5685", "17055", "80055"],
  ["8", "4", "5685", "22740", "85740"],
  ["9", "4", "5685", "22740", "85740"],
  ["10", "5", "5685", "28425", "91425"],
  ["11", "5", "5685", "28425", "91425"],
  ["12", "6", "5685", "34110", "97110"],
  ["13", "6", "5685", "34110", "97110"],
  ["14", "7", "5685", "39795", "102795"],
  ["15", "7", "5685", "39795", "102795"],
  ["16", "7", "5685", "39795", "102795"],
  ["17", "8", "5685", "45480", "108480"],
  ["18", "8", "5685", "45480", "108480"],
  ["19", "9", "5685", "51165", "114165"],
  ["20", "9", "5685", "51165", "114165"],
  ["21", "10", "5685", "56850", "119850"],
  ["22", "10", "5685", "56850", "119850"],
  ["23", "11", "5685", "62535", "125535"],
  ["24", "11", "5685", "62535", "125535"],
  ["25", "12", "5685", "68220", "131220"],
  ["26", "12", "5685", "68220", "131220"],
  ["27", "13", "5685", "73905", "136905"],
  ["28", "13", "5685", "73905", "136905"],
  ["29", "13", "5685", "73905", "136905"],
  ["30", "14", "5685", "79590", "142590"],
  ["31", "14", "5685", "79590", "142590"],
  ["32", "15", "5685", "85275", "148275"],
  ["33", "15", "5685", "85275", "148275"],
  ["34", "16", "5685", "90960", "153960"],
  ["35", "16", "5685", "90960", "153960"],
  ["36", "17", "5685", "96645", "159645"],
  ["37", "17", "5685", "96645", "159645"],
  ["38", "18", "5685", "102330", "165330"],
  ["39", "18", "5685", "102330", "165330"],
  ["40", "19", "5685", "108015", "171015"],
  ["41", "19", "5685", "108015", "171015"],
  ["42", "20", "5685", "113700", "176700"],
  ["43", "20", "5685", "113700", "176700"],
  ["44", "20", "5685", "113700", "176700"],
  ["45", "21", "5685", "119385", "182385"],
  ["46", "21", "5685", "119385", "182385"],
  ["47", "22", "5685", "125070", "188070"],
  ["48", "22", "5685", "125070", "188070"],
  ["49", "23", "5685", "130755", "193755"],
  ["50", "23", "5685", "130755", "193755"],
  ["51", "24", "5685", "136440", "199440"],
  ["52", "24", "5685", "136440", "199440"],
  ["53", "25", "5685", "142125", "205125"],
  ["54", "25", "5685", "142125", "205125"],
  ["55", "26", "5685", "147810", "210810"],
  ["56", "26", "5685", "147810", "210810"],
  ["57", "26", "5685", "147810", "210810"],
  ["58", "27", "5685", "153495", "216495"],
  ["59", "27", "5685", "153495", "216495"],
  ["60", "28", "5685", "159180", "222180"],
  ["61", "28", "5685", "159180", "222180"],
  ["62", "29", "5685", "164865", "227865"],
  ["63", "29", "5685", "164865", "227865"],
  ["64", "30", "5685", "170550", "233550"],
  ["65", "30", "5685", "170550", "233550"],
  ["66", "31", "5685", "176235", "239235"],
  ["67", "31", "5685", "176235", "239235"],
  ["68", "32", "5685", "181920", "244920"],
  ["69", "32", "5685", "181920", "244920"],
  ["70", "33", "5685", "187605", "250605"],
  ["71", "33", "5685", "187605", "250605"],
  ["72", "33", "5685", "187605", "250605"],
  ["73", "34", "5685", "193290", "256290"],
  ["74", "34", "5685", "193290", "256290"],
  ["75", "35", "5685", "198975", "261975"],
  ["76", "35", "5685", "198975", "261975"],
];

var kiloWattPermeterSquare = [
 "68,900", 
 "68,900", 
 "74,585", 
 "74,585", 
 "80,270", 
 "80,270", 
 "85,955", 
 "85,955", 
 "91,640", 
 "91,640", 
 "91,640", 
 "97,325", 
 "97,325", 
 "103,010", 
 "103,010", 
 "108,695", 
 "108,695", 
 "114,380", 
 "114,380", 
 "120,065", 
 "120,065", 
 "120,065", 
 "125,750", 
 "125,750", 
 "131,435", 
 "131,435", 
 "137,120", 
 "137,120", 
 "142,805", 
 "142,805", 
 "148,490", 
 "148,490", 
 "148,490", 
 "154,175", 
 "154,175", 
 "159,860", 
 "159,860", 
 "165,545", 
 "165,545", 
 "171,230", 
 "171,230", 
 "176,915", 
 "176,915", 
 "176,915", 
 "182,600", 
 "182,600", 
 "188,285", 
 "188,285", 
 "193,970", 
 "193,970", 
 "199,655", 
 "199,655", 
 "205,340", 
 "205,340", 
 "205,340", 
 "211,025", 
 "211,025", 
 "216,710", 
 "216,710", 
 "222,395", 
 "222,395", 
 "228,080", 
 "228,080", 
 "233,765", 
 "233,765", 
 "233,765", 
 "239,450", 
 "239,450", 
 "245,135", 
 "245,135", 
 "250,820", 
 "250,820", 
 "256,505", 
 "256,505", 
 "262,190", 
 "262,190", 
]

var batteryPrice = 61941;
var chargerPrice = 17078;

function selectRoofType(roofType) {
  let flatRoof = $("#page_2_flatRoof")[0];
  let normalRoof = $("#page_2_normalRoof")[0];
  let steepRoof = $("#page_2_steepRoof")[0];
  if (roofType == "flat") {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/flat_roof.jpg')";
    flatRoof.style.background = "#f9c349";
    normalRoof.style.background = "#e4e4e6";
    steepRoof.style.background = "#e4e4e6";
  } else if (roofType == "normal") {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/normal_roof.jpg')";
    flatRoof.style.background = "#e4e4e6";
    normalRoof.style.background = "#f9c349";
    steepRoof.style.background = "#e4e4e6";
  } else {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/steep_roof.jpg')";
    flatRoof.style.background = "#e4e4e6";
    normalRoof.style.background = "#e4e4e6";
    steepRoof.style.background = "#f9c349";
  }
}

function selectPanelType(panelType) {
  let essentailText_1_a = "Essential";
  let essentailText_1_b = "415W";
  let essentailText_2_a = "A profitable investment";
  let essentailText_2_b = "214W/m2";
  let essentailText_3 = "Our most cost-effective package for the best possible profitability. Highly efficient solar panels that fit all types of roofs.";

  let designText_1_a = "Design";
  let designText_1_b = "405W";
  let designText_2_a = "Stylish panels";
  let designText_2_b = "208W/m2";
  let designText_3 =
    "This package is perfect for those who care a little extra about the appearance of the solar panels and want to ensure a nice aesthetic roof.";

  let proText_1_a = "Pro";
  let proText_1_b = "415W";
  let proText_2_a = "Solar cells without compromises";
  let proText_2_b = "234W/m2";
  let proText_3 =
    "Pro is an elegant and reliable panel with high efficiency. The panel is produced with innovative technology and sustainability in focus. With Pro, you get a product guarantee that ensures high power for a long time.";

  let essentialPanel = $("#page_3_essentialSolarPanel")[0];
  let designPanel = $("#page_3_designSolarPanel")[0];
  let proPanel = $("#page_3_proSolarPanel")[0];

  let text_1_a = document.getElementById("text_1_a");
  let text_1_b = document.getElementById("text_1_b");
  let text_2_a = document.getElementById("text_2_a");
  let text_2_b = document.getElementById("text_2_b");
  let text_3 = document.getElementById("text_3");
  if (panelType == "essential") {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/essential_panel.jpg')";
    essentialPanel.style.background = "#f9c349";
    designPanel.style.background = "#e4e4e6";
    proPanel.style.background = "#e4e4e6";
    text_1_a.innerHTML = essentailText_1_a;
    text_1_b.innerHTML = essentailText_1_b;
    text_2_a.innerHTML = essentailText_2_a;
    text_2_b.innerHTML = essentailText_2_b;
    text_3.innerHTML = essentailText_3;
  } else if (panelType == "design") {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/design_panel.jpg')";
    essentialPanel.style.background = "#e4e4e6";
    designPanel.style.background = "#f9c349";
    proPanel.style.background = "#e4e4e6";

    text_1_a.innerHTML = designText_1_a;
    text_1_b.innerHTML = designText_1_b;
    text_2_a.innerHTML = designText_2_a;
    text_2_b.innerHTML = designText_2_b;
    text_3.innerHTML = designText_3;
  } else {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/pro_panel.jpg')";
    essentialPanel.style.background = "#e4e4e6";
    designPanel.style.background = "#e4e4e6";
    proPanel.style.background = "#f9c349";

    text_1_a.innerHTML = proText_1_a;
    text_1_b.innerHTML = proText_1_b;
    text_2_a.innerHTML = proText_2_a;
    text_2_b.innerHTML = proText_2_b;
    text_3.innerHTML = proText_3;
  }
}

function selectAdditionalProduct(additionalProduct) {
  let additionalBattery = $("#page_4_additionalBattery")[0];
  let additionalCharger = $("#page_4_additionalCharger")[0];
  if (additionalProduct == "battery") {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/battery.jpg')";
    if (additionalBattery.style.background == "rgb(249, 195, 73)") {
      additionalBattery.style.background = "#e4e4e6";
    } else {
      additionalBattery.style.background = "#f9c349";
    }
  } else if (additionalProduct == "charger") {
    document.getElementById("sideImageOfPage").style.backgroundImage = "url('images/charger.jpeg')";
    if (additionalCharger.style.background == "rgb(249, 195, 73)") {
      additionalCharger.style.background = "#e4e4e6";
    } else {
      additionalCharger.style.background = "#f9c349";
    }
  }
}
