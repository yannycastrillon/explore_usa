
const Dashboard = React.createClass({
  getInitialState: function() {
    return {
      images: []
    }
  },

  render: function() {
    return(
      <div>
        <h1> This is the Dashboard Component</h1>
        <Carousel />
        <ListImages/>
        <GoogleMap />
        <Footer />
      </div>
    )
  }
})
