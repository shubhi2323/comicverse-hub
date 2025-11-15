// Browse Page JavaScript - Filtering and Sorting

let filteredComics = [...comics];

// Initialize browse page
document.addEventListener('DOMContentLoaded', () => {
    // Check for publisher filter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const publisherParam = urlParams.get('publisher');
    
    if (publisherParam) {
        document.getElementById('publisherFilter').value = publisherParam;
    }
    
    renderComics();
    
    // Event listeners
    document.getElementById('publisherFilter').addEventListener('change', applyFilters);
    document.getElementById('genreFilter').addEventListener('change', applyFilters);
    document.getElementById('sortFilter').addEventListener('change', applyFilters);
});

// Apply filters and sorting
function applyFilters() {
    const publisher = document.getElementById('publisherFilter').value;
    const genre = document.getElementById('genreFilter').value;
    const sort = document.getElementById('sortFilter').value;
    
    // Filter by publisher
    filteredComics = comics.filter(comic => {
        if (publisher !== 'all' && comic.publisher !== publisher) {
            return false;
        }
        if (genre !== 'all' && comic.genre !== genre) {
            return false;
        }
        return true;
    });
    
    // Sort comics
    switch(sort) {
        case 'price-low':
            filteredComics.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredComics.sort((a, b) => b.price - a.price);
            break;
        case 'title-az':
            filteredComics.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'date-new':
            filteredComics.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            break;
        case 'date-old':
            filteredComics.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
            break;
        default:
            // Keep original order
            break;
    }
    
    renderComics();
}

// Render comics grid
function renderComics() {
    const grid = document.getElementById('comicGrid');
    if (!grid) return;
    
    if (filteredComics.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h2 style="color: var(--primary-red); margin-bottom: 1rem;">No comics found</h2>
                <p style="color: var(--text-muted);">Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredComics
        .map(comic => renderComicCard(comic))
        .join('');
}

// Render comic card (reuse from main.js)
function renderComicCard(comic) {
    return `
        <div class="comic-card" onclick="window.location.href='comic-detail.html?id=${comic.id}'">
            <img src="${comic.image}" alt="${comic.title}" class="comic-cover">
            <div class="comic-info">
                <h3 class="comic-title">${comic.title}</h3>
                <p class="comic-publisher">${comic.publisher}</p>
                <p class="comic-price">$${comic.price.toFixed(2)}</p>
            </div>
        </div>
    `;
}


