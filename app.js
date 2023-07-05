document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from db.json
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        const carsContainer = document.getElementById('cars-container');
        const cars = data.CARS;
  
        // Display car cards
        cars.forEach(car => {
          const carCard = createCarCard(car);
          carsContainer.appendChild(carCard);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  
  function createCarCard(car) {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');
  
    const carImage = document.createElement('img');
    carImage.classList.add('car-image');
    carImage.src = car.poster;
    carImage.alt = car.title;
    carCard.appendChild(carImage);
  
    const carDetails = document.createElement('div');
    carDetails.classList.add('car-details');
  
    const carTitle = document.createElement('h2');
    carTitle.textContent = car.title;
    carDetails.appendChild(carTitle);
  
    const claim = document.createElement('p');
    claim.textContent = 'Claim Type: ' + car.claim;
    carDetails.appendChild(claim);
  
    const capacity = document.createElement('p');
    capacity.textContent = 'Capacity: ' + car.capacity;
    carDetails.appendChild(capacity);
  
    const ageLimit = document.createElement('p');
    ageLimit.textContent = 'Age Limit: ' + car.age_limit;
    carDetails.appendChild(ageLimit);
  
    const compensationAmount = document.createElement('p');
    compensationAmount.textContent = 'Compensation Amount: ' + car['compensation amount'];
    carDetails.appendChild(compensationAmount);
  
    const description = document.createElement('p');
    description.textContent = 'Description: ' + car.description;
    carDetails.appendChild(description);
  
    carCard.appendChild(carDetails);
  
    return carCard;
  }
  