const Carousel = React.createClass({
  render: function(){
    return(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
<div id="imageCarousel" className="carousel slide" data-interval="2000" data-ride="carousel" data-pause="hover" data-wrap="true">

<ol className="carousel-indicators">
    <li data-target="#imageCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#imageCarousel" data-slide-to="1"></li>
    <li data-target="#imageCarousel" data-slide-to="2"></li>
</ol>

  <div className="carousel-inner">
    <div className ="item active">
      <div className="row">
        <div className="col-xs-4">
          <img src="http://theawesomedaily.com/wp-content/uploads/2014/09/b4zCAJy-600x600.jpg" className="img-responsive" />
            <div className="carousel-caption">
              <h3>Massachussets</h3>
            </div>
          </div>
        <div className="col-xs-4">
          <img src="https://irs2.4sqi.net/img/general/600x600/1912407_Ty45QLNmheIfSFYg0BDnGaQgl7c7SbJgGuwccIdtO2U.jpg" className="img-responsive" />
            <div className="carousel-caption">
              <h3>Texas</h3>
            </div>
          </div>
        <div className="col-xs-4">
          <img src="http://www.themeparkreview.com/forum/files/img60657c_446.jpg" className="img-responsive" />
            <div className="carousel-caption">
              <h3>New York</h3>
            </div>
          </div>
        </div>
      </div>
    <div className="item">
      <div className="row">
        <div className="col-xs-4">
          <img src="http://www.royalgorgetravel.com/sites/default/files/images/CTO%20Coop%20RG%20Bridge.jpg" className="img-responsive" />
            <div className="carousel-caption">
              <h3>Illinois</h3>
            </div>
          </div>
        <div className="col-xs-4">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/9b/91/b5/9b91b58659312da42381d9474116cf9d.jpg" className="img-responsive" />
            <div className="carousel-caption">
              <h3>South Carolina</h3>
            </div>
          </div>
        <div className="col-xs-4">
          <img src="https://www.mustdo.com/wp-content/uploads/2016/12/Sun-n-Fun-Lagoon-water-park-Naples-Florida-1.jpg" className="img-responsive" />
            <div className="carousel-caption">
              <h3>Florida</h3>
            </div>
          </div>
        </div>
    </div>

  <div className="item">
    <div className="row">
      <div className="col-xs-4">
        <img src="https://flavorwire.files.wordpress.com/2013/07/06poegrave-large.jpg?w=1920" className="img-responsive" />
          <div className="carousel-caption">
            <h3>Rhode Island</h3>
          </div>
        </div>
      <div className="col-xs-4">
        <img src="https://igx.4sqi.net/img/general/600x600/ZyUGpGlgLocilPD29vjtS82RzwAIwd1GMZif10sAvi8.jpg" className="img-responsive" />
          <div className="carousel-caption">
            <h3>Philadelphia</h3>
          </div>
        </div>
      <div className="col-xs-4">
        <img src="https://s-media-cache-ak0.pinimg.com/736x/f8/34/de/f834de22cb569c67cf77b0d0d36effd3.jpg" className="img-responsive" />
          <div className="carousel-caption">
            <h3>Texas</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a href="#imageCarousel" className="carousel-control left" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span></a>
  <a href="#imageCarousel" className="carousel-control right" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span></a>
        </div>
      </div>
  </div>
</div>

    )
  }
})
