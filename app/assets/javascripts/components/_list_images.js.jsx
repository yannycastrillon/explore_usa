const ListImages = React.createClass({
  getInitialState: function() {
    return {
      images: []
    }
  },

  handleClick: function (e){
    var self = this
     var searchTerm = this.refs.term.value.trim()
     if(!searchTerm) {
       return this.validateSearchField(e)
     }
     // Get data from API
     $.getJSON('api/v1/images?phrase='+searchTerm, (response)=>{
       console.log(response);
       // Sets API images to the state. Self is the actual component obj
       self.setState({
         images: response.data.images
       })
     })
  },

  render: function(){
    return(
      <section>
        <div className="row">
          <h2>This is List Images component search</h2>
        </div>
        <div className="row">
          <div id="search-form" className="col-xs-5">
            <input onChange={this.validateSearchField} type="text" ref="term" className="form-control " placeholder="Search term" maxLength="20"/><span id="glyphicon-x" aria-hidden="true"></span>
            <button type="button" className="btn btn-info" onClick={this.handleClick}>Search</button>
          </div>
        </div>
        <div>
          <SingleImage images={this.state.images} />
        </div>
      </section>
    )
  },

  componentDidMount: function() {
    setTimeout(function () {
      console.log('Component mounted');

    }, 1000);
  },

  validateSearchField: function(e){
    if (e.type == "change") {
      $("#search-form").removeClass("has-error has-feedback")
      $("#glyphicon-x").removeClass("glyphicon glyphicon-remove form-control-feedback")
      $(this.refs.term).removeAttr("aria-describedby","inputError2Status")
      $("#msg").remove()
    }else{
      $("#search-form").addClass("has-error has-feedback").append("<p id='msg' class='text-danger' style='display:inline;'>Enter a search value</p>")
      $("#glyphicon-x").addClass("glyphicon glyphicon-remove form-control-feedback")
      $(this.refs.term).attr("aria-describedby","inputError2Status")
    }
  }
})
