
const Dashboard = React.createClass({
  getInitialState: function() {
    return {
      images: []
    }
  },

  render: function() {
    return(
      <div>
        <Carousel />
        <ListImages/>
        <GoogleMap />
        <Footer />
      </div>
    )
  }
})
