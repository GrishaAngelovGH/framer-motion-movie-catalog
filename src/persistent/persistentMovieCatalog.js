const persistentMovieCatalog = {
  saveAsFavorite: function (id) {
    const favorites = this.getFavoriteMovies()
    favorites.push(id)
    window.localStorage.setItem("favorites", JSON.stringify(favorites))
  },
  removeAsFavorite: function (id) {
    const favorites = this.getFavoriteMovies()
    const newFavorites = favorites.filter(v => v !== id)
    window.localStorage.setItem("favorites", JSON.stringify(newFavorites))
  },
  isFavorite: function (id) {
    const favorites = this.getFavoriteMovies()
    return favorites.includes(id)
  },
  getFavoriteMovies: function () {
    const favoriteMovies = window.localStorage.getItem("favorites") || "[]"
    return JSON.parse(favoriteMovies)
  }
}

export default persistentMovieCatalog