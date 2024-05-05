const setup = () => {
    // Eventueel initialisatiecode
};

const handleSearch = () => {
    const zoeken = document.getElementById('zoeken').value.trim();
    if (!zoeken.startsWith('/')) {
        alert('Ongeldig commando. Gebruik een commando dat begint met "/"');
        return;
    }

    const [prefix, query] = zoeken.split(' ', 2);
    let url;
    if (prefix === '/g') {
        url = `https://www.google.com/search?q=${query}`;
    } else if (prefix === '/y') {
        url = `https://www.youtube.com/results?search_query=${query}`;
    } else if (prefix === '/t') {
        url = `https://twitter.com/hashtag/${query}`;
    } else if (prefix === '/i') {
        url = `https://www.instagram.com/explore/tags/${query}/`;
    } else {
        alert('Onbekend commando.');
        return;
    }

    window.open(url, '_blank');

    const geschiedenis = document.getElementById('geschiedenis');
    const card = document.createElement('div');
    if(prefix === '/g' || prefix === '/t' ){
        card.classList.add('blauw');
    } else if(prefix === '/y'){
        card.classList.add('red');
    } else if(prefix === '/i'){
        card.classList.add('purple');
    }
    card.innerHTML = `
    <div>
      
        <h5 class="card-title">${getWebsiteName(prefix)}</h5>
        <p class="card-text">${query}</p>
        <a href="${url}" target="_blank" class="btn btn-primary">Go!</a>
    
    </div>
  `;
    geschiedenis.appendChild(card);

    document.getElementById('zoeken').value = '';

    save({ title: getWebsiteName(prefix), text: query, url });
};

const getWebsiteName = (prefix) => {
    if (prefix === '/g') {
        return 'Google';
    } else if (prefix === '/y') {
        return 'YouTube';
    } else if (prefix === '/t') {
        return 'Twitter';
    } else if (prefix === '/i') {
        return 'Instagram';
    } else {
        return '';
    }
};

const save = (info) => {
    let history = JSON.parse(localStorage.getItem('searchHistory'));
    if (!history) {
        history = [];
    }
    history.push(info);
    localStorage.setItem('searchHistory', JSON.stringify(history));
};

window.addEventListener("load", setup);
