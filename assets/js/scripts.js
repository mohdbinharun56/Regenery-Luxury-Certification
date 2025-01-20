// display header to fetch
fetch('/includes/header.html').then(res=>res.text()).then(data=>document.getElementById('header').innerHTML=data) 

// display application-status-form to fetch data
fetch('/application-status.html').then(res=>res.text()).then(data=>document.getElementById('application-status-form').innerHTML=data);

// display footer 
fetch('/includes/footer.html').then(res=>res.text()).then(data=>document.getElementById('footer').innerHTML=data)