const persistentMovieCatalog = {
  saveAsFavorite: function (id) {
    const favorites = this.getFavoriteMoviesIDs()
    favorites.push(id)
    window.localStorage.setItem("favorites", JSON.stringify(favorites))
  },
  removeAsFavorite: function (id) {
    const favorites = this.getFavoriteMoviesIDs()
    const newFavorites = favorites.filter(v => v !== id)
    window.localStorage.setItem("favorites", JSON.stringify(newFavorites))
  },
  isFavorite: function (id) {
    const favorites = this.getFavoriteMoviesIDs()
    return favorites.includes(id)
  },
  getFavoriteMoviesIDs: function () {
    const favoriteMovies = window.localStorage.getItem("favorites") || "[]"
    return JSON.parse(favoriteMovies)
  }
}

export default persistentMovieCatalog