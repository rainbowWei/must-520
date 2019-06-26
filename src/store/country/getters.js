const getter = {
  getProvince (state) {
    const countries = [].concat(state.countryList);
    console.log(countries == state.countryList, 'hhhhhh')
    return countries.map(country => {
      Reflect.deleteProperty(country, 'children');
      return country
    })
  }
}
export default getter
