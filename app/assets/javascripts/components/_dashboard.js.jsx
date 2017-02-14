
var Dashboard = React.createClass({
  getInitialState() {
    return {
      items: []
    }
  },

  render() {
    return(
      <div>
        <h1> This is the Dashboard Component</h1>
        <Navbar />
        <Carousel />
        <ListImages />
        <GoogleMap />
        <Footer />
      </div>
    )
  }
})
