
var Dashboard = React.createClass({
  getInitialState() {
    return {
      images: []
    }
  },

  render() {
    return(
      <div>
        <h1> This is the Dashboard Component</h1>
        <Carousel />
        <ListImages />
        <GoogleMap />
        <Footer />
      </div>
    )
  }
})
