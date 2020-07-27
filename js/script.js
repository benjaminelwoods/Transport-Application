(function () {
  // object for users details
  const dataObj = {
    name: '',
    location: '',
    destination: '',
    distance: 0,
    dateStart: '',
    dateEnd: '',
    amountDays: 0,
    groupSize: 0,
    chosenVehicle: '',
    vehicleCost: '',
    vehicleMileage: '',
    costPerLitre: 2.02,
    splitCost: false
  }

  // Array of New Zealand Towns and Cities
  const nzTowns = ['Akaroa',
    'Albert Town',
    'Albury',
    'Alexandra',
    'Amberley',
    'Arrowtown',
    'Ashburton',
    'Auckland',
    'Balclutha',
    'Balfour',
    'Beachlands',
    'Beaumont',
    'Blackball',
    'Blenheim',
    'Bluff',
    'Brighton',
    'Brightwater',
    'Bulls',
    'Cambridge',
    'Carterton',
    'Cheviot',
    'Christchurch',
    'Clarksville',
    'Coromandel',
    'Cromwell',
    'Dannevirke',
    'Darfield',
    'Dargaville',
    'Drury',
    'Dunedin',
    'Duntroon',
    'Edgecumbe',
    'Eltham',
    'Eketahuna',
    'Fairlie',
    'Featherston',
    'Feilding',
    'Flaxmere',
    'Foxton',
    'Foxton Beach',
    'Frankton',
    'Otago',
    'Waikato',
    'Franz Josef',
    'Geraldine',
    'Gisborne',
    'Glenorchy',
    'Gore',
    'Granity',
    'Greymouth',
    'Greytown',
    'Haast',
    'Hakataramea',
    'Hamilton',
    'Hanmer Springs',
    'Hastings',
    'Havelock',
    'Havelock North',
    'Hawea',
    'Hawera',
    'Helensville',
    'Henley',
    'Hinuera',
    'Hokitika',
    'Howick',
    'Huntly',
    'Inangahua Junction',
    'Inglewood',
    'Invercargill',
    'Kaiapoi',
    'Kaikohe',
    'Kaikoura',
    'Kaitaia',
    'Kaitangata',
    'Karamea',
    'Katikati',
    'Kawakawa',
    'Kawerau',
    'Kerikeri',
    'Kihikihi',
    'Kinloch',
    'Kumara',
    'Kumeu',
    'Kurow',
    'Kawhia',
    'Lawrence',
    'Leeston',
    'Leigh',
    'Levin',
    'Lincoln',
    'Little River',
    'Lower Hutt',
    'Lumsden',
    'Lyttelton',
    'Manaia',
    'Mangakino',
    'Manukau',
    'Maraetai',
    'Martinborough',
    'Marton',
    'Masterton',
    'Matamata',
    'Maungaturoto',
    'Mayfield',
    'Methven',
    'Middlemarch',
    'Millers Flat',
    'Milton',
    'Moeraki',
    'Moerewa',
    'Mokau',
    'Morrinsville',
    'Mosgiel',
    'Mossburn',
    'Motueka',
    'Mount Maunganui',
    'Mount Somers',
    'Murchison',
    'Murupara',
    'Napier',
    'Naseby',
    'Nelson',
    'New Brighton',
    'New Plymouth',
    'Ngapara',
    'Ngaruawahia',
    'Ngongotaha',
    'North Shore City',
    'Oamaru',
    'Oban',
    'Ohakune',
    'Ohoka',
    'Ohope Beach',
    'Ohura',
    'Okato',
    'Omokoroa',
    'Opotiki',
    'Opunake',
    'Orewa',
    'Otaki',
    'Otakou',
    'Otorohanga',
    'Oxford',
    'Paekakariki',
    'Paeroa',
    'Pahiatua',
    'Paihia',
    'Palmerston',
    'Palmerston North',
    'Papakura',
    'Papatoetoe',
    'Paraparaumu',
    'Patea',
    'Pauanui',
    'Pauatahanui',
    'Petone',
    'Picton',
    'Piopio',
    'Pirongia',
    'Pleasant Point',
    'Plimmerton',
    'Porirua',
    'Port Chalmers',
    'Portobello',
    'Pukekohe',
    'Pukerua Bay',
    'Pukeuri',
    'Putaruru',
    'Queenstown',
    'Raetihi',
    'Raglan',
    'Ramarama',
    'Ranfurly',
    'Rangiora',
    'Raumati',
    'Reefton',
    'Renwick',
    'Richmond',
    'Riverhead',
    'Riverton',
    'Rolleston',
    'Ross',
    'Rotorua',
    'Roxburgh',
    'Ruatoria',
    'Runanga',
    'Russell',
    'Sanson',
    'Seddon',
    'Sheffield',
    'Shannon',
    'Snells Beach',
    'Springfield',
    'Stratford',
    'Silverdale',
    'Taihape',
    'Taipa-Mangonui',
    'Tairua',
    'Takaka',
    'Tapanui',
    'Taradale',
    'Taumarunui',
    'Taupo',
    'Tauranga',
    'Te Anau',
    'Te Arai',
    'Te Aroha',
    'Te Awamutu',
    'Te Kuiti',
    'Te Puke',
    'Temuka',
    'Thames',
    'Timaru',
    'Tinwald',
    'Tirau',
    'Tokarahi',
    'Tokoroa',
    'Tolaga Bay',
    'Tuakau',
    'Turangi',
    'Twizel',
    'Upper Hutt',
    'Waiheke Island',
    'Waharoa',
    'Waihi',
    'Waihi Beach',
    'Waikanae',
    'Waimate',
    'Waiouru',
    'Wainuiomata',
    'Waipawa',
    'Waipukurau',
    'Wairakei',
    'Wairoa',
    'Waitahuna',
    'Waikouaiti',
    'Waitakere',
    'Waitara',
    'Waitoa',
    'Waitotara',
    'Waiuku',
    'Wakefield',
    'Wallacetown',
    'Walton',
    'Waverley',
    'Wanaka',
    'Wanganui',
    'Ward',
    'Wardville',
    'Warkworth',
    'Wellington',
    'Wellsford',
    'Westport',
    'Whakatane',
    'Whakamaru',
    'Whangamata',
    'Whangamomona',
    'Whangarei',
    'Whiritoa',
    'Whitford',
    'Whitby',
    'Whitianga',
    'Willowby',
    'Winscombe',
    'Winton',
    'Woodend',
    'Woodville',
    'Wyndham']

  // Defining variables
  const nextArrow = document.getElementById('nameArrow')
  let input = document.getElementById('nameInput')
  let inputContainer = document.getElementById('name')
  const nameFirst = document.querySelector('.nameFirst')
  const nameSecond = document.querySelector('.nameSecond')

  const motorbike = document.getElementById('motorbike')
  const smallCar = document.getElementById('smallCar')
  const largeCar = document.getElementById('largeCar')
  const motorhome = document.getElementById('motorhome')

  const splitCostYes = document.getElementById('splitCostYes')
  const splitCostNo = document.getElementById('splitCostNo')

  const nameArrow = document.getElementById('nameArrow')
  const destinationArrow = document.getElementById('destinationArrow')
  const datesArrow = document.getElementById('datesArrow')
  const groupSizeArrow = document.getElementById('groupSizeArrow')

  // input will be in focus when page loads

  input.focus()

  let arrow = nextArrow

  enterListener(input, arrow)

  // Name Arrow

  nameArrow.onclick = function () {
    if ((input.value.match(/^[A-Za-z]+$/)) && (input.value !== null)) {
      dataObj.name = input.value

      nameFirst.textContent = dataObj.name

      const nextInput = document.getElementById('locationInput')
      const otherInput = document.getElementById('destinationInput')
      const nextContainer = document.getElementById('destination')
      const nextArrow = document.getElementById('destinationArrow')

      nextScreen(nextContainer, nextInput, nextArrow, otherInput)
    } else {
      toastr.error('Please only input letters.')
    }
  }

  // Destination Arrow
  destinationArrow.onclick = function () {
    let inputDest = false
    let inputLoc = false
    const locInput = document.getElementById('locationInput')

    for (var i = 0; i < nzTowns.length; i++) {
      if (input.value === nzTowns[i]) {
        inputDest = true
      }
      if (locInput.value === nzTowns[i]) {
        inputLoc = true
      }
    }

    if (inputDest === false) {
      input.classList.add('input-error')
      toastr.error('Please input a valid New Zealand town or city.')
    }

    if (inputLoc === false) {
      locInput.classList.add('input-error')
      toastr.error('Please input a valid New Zealand town or city.')
    }

    if (locInput.value === input.value) {
      locInput.classList.add('input-error')
      input.classList.add('input-error')
      toastr.error('Inputs cannot be the same')
    }

    if ((inputDest === true) && (inputLoc === true) && (locInput.value !== input.value)) {
      dataObj.destination = input.value
      dataObj.location = locInput.value

      mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuZWx3b29kcyIsImEiOiJja2M0ZWR1MmswNnllMnhtc2Yxejh5ZHg3In0.Gsnk1oS6NhoEuJ68H7EPHA'

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-79.4512, 43.6568],
        zoom: 13
      })

      var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiYmVuZWx3b29kcyIsImEiOiJja2M0ZWR1MmswNnllMnhtc2Yxejh5ZHg3In0.Gsnk1oS6NhoEuJ68H7EPHA',
        unit: 'metric'
      })

      map.addControl(directions, 'top-left')

      // This is a listener for a route being established
      directions.on('route', function (directions) {
        var kms = directions.route[0].distance / 1000
        var kmsRounded = Math.ceil(kms)
        dataObj.distance = kmsRounded
      })

      const showRoute = document.getElementById('showRoute')
      showRoute.onclick = setRouteFromInput

      function setRouteFromInput () {
        var getOrigin = dataObj.location + ' NZ'
        var getDestination = dataObj.destination + ' NZ'
        directions.setOrigin(getOrigin)
        directions.setDestination(getDestination)
      }

      setRouteFromInput()

      const nextInput = document.getElementById('datesInputStart')
      const otherInput = document.getElementById('datesInputEnd')
      const nextContainer = document.getElementById('dates')
      const nextArrow = document.getElementById('datesArrow')

      nextScreen(nextContainer, nextInput, nextArrow, otherInput)
    }
  }

  datesArrow.onclick = function () {
    const today = new Date()

    // Define variables
    let getMonth
    let getDay

    // Adds 0 to the start of single digit numbers (e.g. 07) to match dd/mm/yyyy format
    if ((today.getMonth() + 1) < 10) {
      getMonth = '0' + (today.getMonth() + 1)
    }

    // Adds 0 to the start of single digit numbers (e.g. 07) to match dd/mm/yyyy format
    if (today.getDate() < 10) {
      getDay = '0' + today.getDate()
    }

    const todaysDate = today.getFullYear() + '-' + getMonth + '-' + getDay
    const dateEnd = document.getElementById('datesInputStart').value

    // Convert dates to Date
    const date1 = new Date(dateEnd)
    const date2 = new Date(input.value)

    // Deduct the smaller date from the greater date
    const difInTime = date2.getTime() - date1.getTime()

    // Amount of days equals the smaller date deducted from the greater date divided
    // by 1000 x 3600 x 24
    const tripDays = difInTime / (1000 * 3600 * 24)

    if ((input.value < todaysDate) || (dateEnd < todaysDate)) {
      // If either first or second input values are before todays date
      // an error is displayed
      toastr.error('Input cannot be before todays date!')
    } else if (tripDays > 15) {
      // If the trip days are greater than 15 days an error is displayed
      toastr.error('Vehicles are only available for up to 15 days')
    } else if (tripDays < 1) {
      // If the trip days are less than one day (e.g. both inputs have the same date)
      // an error is displayed
      toastr.error('Vehicles cannot be hired for less than 24 hours')
    } else {
      // If none of the above conditionals apply

      // Stores values in the dataObj
      dataObj.dateEnd = input.value
      dataObj.dateStart = dateEnd
      dataObj.amountDays = tripDays

      // The next input is defined
      const nextInput = document.getElementById('groupSizeInput')
      // The next container is defined
      const nextContainer = document.getElementById('groupSize')
      // The next arrow is defined
      const nextArrow = document.getElementById('groupSizeArrow')

      // The nextScreen function is called with the variables nextContainer, nextInput
      // and nextArrow stored
      nextScreen(nextContainer, nextInput, nextArrow)
    }
  }

  groupSizeArrow.onclick = function () {
    if (input.value < 1) {
      // If the input value is less than 1 an error is displayed
      toastr.error('There must be at least one person')
    } else if (input.value > 6) {
      // If the input value is greater than 6 an error is displayed
      toastr.error('There are no vehicles available for more than 6 people')
    } else if ((dataObj.amountDays > 10) && (input.value < 2)) {
      // If the amount of days is greater than 10 and the input value is less than 2
      // an error is displayed
      toastr.error('There are no single person vehicles available for more than 10 days')
    } else {
      // If none of the above conditionals apply, the group size is set to the input value
      dataObj.groupSize = input.value

      // The next container is set as vehicle select
      const nextContainer = document.getElementById('vehicleSelect')

      // The vehicle select function is called with the variable nextContainer stored
      vehicleSelect(nextContainer)
    }
  }

  // Vehicle Screen Function
  function vehicleSelect (nextContainer) {
    // The input container is hidden
    inputContainer.classList.remove('show')
    inputContainer.classList.add('hide')

    // The input container is re-defined as the next container
    inputContainer = nextContainer

    // The input container is set to visible
    inputContainer.classList.remove('hide')
    inputContainer.classList.add('show')

    // Motorbike
    if ((dataObj.groupSize > 1) || (dataObj.amountDays > 5)) {
      // If the group size is greater than 1 or the amount of days is greater than 5,
      // the motorbike iss set to unselectable
      motorbike.classList.add('unselectable')
    }

    // Small car
    if ((dataObj.groupSize > 2) || (dataObj.amountDays > 10)) {
      // If the group size is greater than 2 or the amount of days is greater than 10,
      // the small car is set to unselectable
      smallCar.classList.add('unselectable')
    }

    // Large car
    if ((dataObj.groupSize > 5) || (dataObj.amountDays < 3) || (dataObj.amountDays > 10)) {
      // If the group size is greater than 5 or theh amount of days is less than 3
      // or greater than 10, the large car is unselectable
      largeCar.classList.add('unselectable')
    }

    // Motorhome
    if ((dataObj.groupSize < 2) || (dataObj.amountDays < 2)) {
      // If the group size is less than 2 or the amount of days is less than 2,
      // the motorhome is unselectable
      motorhome.classList.add('unselectable')
    }
  }

  motorbike.onclick = function () {
    // If the motorbike is clicked, the chosen vehicle is set to Motorbike
    dataObj.chosenVehicle = 'Motorbike'
    // The vehicle cost is set to 109
    dataObj.vehicleCost = 109
    // The vehicle mileage is set to 3.7
    dataObj.vehicleMileage = 3.7
    // The final screen function is displayed
    finalScreen()
  }

  smallCar.onclick = function () {
    // If the small car is clicked, the chosen vehicle is set to Small Car
    dataObj.chosenVehicle = 'Small Car'
    // The vehicle cost is set to 129
    dataObj.vehicleCost = 129
    // The vehicle mileage is set to 8.5
    dataObj.vehicleMileage = 8.5
    if (dataObj.groupSize > 1) {
      // If the group size is greater than 1, the split cost screen is displayed
      splitCostScreen()
    } else {
      // If the group size is less than 1, the final screen is displayed
      finalScreen()
    }
  }

  largeCar.onclick = function () {
    // If the large car is clicked, the chosen vehicle is set to Large Car
    dataObj.chosenVehicle = 'Large Car'
    // The vehicle cost is set to 144
    dataObj.vehicleCost = 144
    // The vehicle mileage is set to 9.7
    dataObj.vehicleMileage = 9.7
    if (dataObj.groupSize > 1) {
      // If the group size is greater than 1, the split cost screen is displayed
      splitCostScreen()
    } else {
      // If the group size is less than 1, the final screen is displayed
      finalScreen()
    }
  }

  motorhome.onclick = function () {
    // If motorhome is clicked, the chosen vehicle is set to Motorhome
    dataObj.chosenVehicle = 'Motorhome'
    // The vehicle cost is set to 200
    dataObj.vehicleCost = 200
    // The vehicle mileage is set to 17
    dataObj.vehicleMileage = 17
    if (dataObj.groupSize > 1) {
      // If the group size is greater than 1, the split cost screen is displayed
      splitCostScreen()
    } else {
      // If the group size is less than 1, the final screen is displayed
      finalScreen()
    }
  }

  // Split cost function
  function splitCostScreen () {
    // Input container is hidden
    inputContainer.classList.remove('show')
    inputContainer.classList.add('hide')

    // Input container is re-defined as the split cost screen
    inputContainer = document.getElementById('splitCost')

    // Input container is set to visible
    inputContainer.classList.remove('hide')
    inputContainer.classList.add('show')
  }

  // Split Cost Yes/No
  splitCostYes.onclick = function () {
    // If Yes is clicked, split cost is set to true
    dataObj.splitCost = true
    // Final screen function is run
    finalScreen()
  }

  splitCostNo.onclick = function () {
    // If No is clicked, split cost is set to false
    dataObj.splitCost = false
    // Final screen function is run
    finalScreen()
  }

  // Final Screen
  function finalScreen () {
    // The input container is hidden
    inputContainer.classList.remove('show')
    inputContainer.classList.add('hide')

    // The input container is re-defined as the final screen
    inputContainer = document.getElementById('finalScreen')

    // The input container is set to visible
    inputContainer.classList.remove('hide')
    inputContainer.classList.add('show')

    // The text content in the label is set to the input name
    nameSecond.textContent = dataObj.name

    // The show route is clicked to update the map to show the journey
    showRoute.click()

    // Defining variables
    const chosenVehicle = document.getElementById('chosenVehicle')
    const chosenVehiclePrice = document.getElementById('chosenVehiclePrice')
    const daysOfRental = document.getElementById('daysOfRental')
    const vehicleCostTotal = document.getElementById('vehicleCostTotal')
    const fuelCost = document.getElementById('fuelCost')
    const totalCost = document.getElementById('totalCost')
    const splitCostTotal = document.getElementById('splitCostTotal')
    const splitCostContainer = document.getElementById('splitCostContainer')

    // Sets the text content to dataObj values
    chosenVehicle.textContent = dataObj.chosenVehicle
    chosenVehiclePrice.textContent = dataObj.vehicleCost
    daysOfRental.textContent = dataObj.amountDays
    // Sets the total cost of the vehicle hire to vehicle cost (per day) multiplied by the amount of days
    vehicleCostTotal.textContent = dataObj.vehicleCost * dataObj.amountDays
    // Sets the estimated fuel cost to the cost per litre multiplied by the vehicle mileage (per 100km)
    // then multiplies that by the distance divided by 100 and rounded to two decimal places
    fuelCost.textContent = Number(Math.round((dataObj.costPerLitre * dataObj.vehicleMileage) * (dataObj.distance / 100) + 'e2') + 'e-2')
    // Sets the total cost to the vehicle cost multiplied by the amount of days added to the cost per
    // litre multiplied by the vehicle mileage and thats multiplied by the distance thats divided by 100
    // and rounded to two decimal places
    totalCost.textContent = Number(Math.round(((dataObj.vehicleCost * dataObj.amountDays) + ((dataObj.costPerLitre * dataObj.vehicleMileage) * (dataObj.distance / 100))) + 'e2') + 'e-2')

    if (dataObj.splitCost === true) {
      // If split cost equals true the text content is set to the total cost divided by the group size
      // and then rounded to two decimal places
      splitCostTotal.textContent = Number(Math.round((totalCost.textContent / dataObj.groupSize) + 'e2') + 'e-2')
    } else {
      // If split cost does not equal true, then the split cost container is hidden
      splitCostContainer.classList.add('hide')
    }
  }

  // Next Screen function
  function nextScreen (nextContainer, nextInput, nextArrow, otherInput) {
    // Hides current container
    inputContainer.classList.remove('show')
    inputContainer.classList.add('hide')

    // Changes current container to next container
    inputContainer = nextContainer
    // Changes current input to next input
    input = nextInput
    // Changes current arrow to next arrow
    arrow = nextArrow

    // Shows next container
    inputContainer.classList.remove('hide')
    inputContainer.classList.add('show')

    // Focuses on input
    input.focus()

    if (otherInput != null) {
      // If there is another input input equals the other input
      input = otherInput
      // Enter listener is applied to other input
      enterListener(input, arrow)
    } else {
      // Enter listener is applied to input
      enterListener(input, arrow)
    }
  };

  // if 'enter' key is pressed while input is in focus, arrow is clicked
  function enterListener (input, arrow) {
    input.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        arrow.click()
      }
    })
  };
  //
})()
