
var Dashboard = React.createClass({
  getInitialState() {
    return {
      items: []
    }
  },

  render() {
    return(
      <div>
        <Carousel />
        <ListImages />
        <GoogleMap />
      </div>
    )
  }
})
