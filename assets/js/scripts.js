// display header to fetch
fetch('/includes/header.html').then(res=>res.text()).then(data=>document.getElementById('header').innerHTML=data) 

// display application-status-form to fetch data
fetch('/application-status.html')
.then(res=>res.text())
.then(data=>document.getElementById('application-status-form').innerHTML=data);

// display footer 
fetch('/includes/footer.html')
.then(res=>res.text())
.then(data=>document.getElementById('footer').innerHTML=data)


// fetch country for select
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const select = document.getElementById('country');


    const sortedCountries = data.sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    sortedCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.cca2; 
        option.textContent = country.name.common;
        select.appendChild(option);
    });
})
.catch(error => console.error('Error fetching country data:', error));