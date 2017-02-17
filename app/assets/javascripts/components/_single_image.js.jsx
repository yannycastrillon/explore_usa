
const SingleImage = React.createClass({

  modalContent: function(data){
    var $divModelContent = $("<div id='details'>")
    $divModelContent.append($("<p>").text(data.artist).prepend("<span>Artist: </span>"))
    $divModelContent.append($("<p>").text(data.artist_title).prepend("<span>Artist Title: </span>"))
    $divModelContent.append($("<p>").text(data.license_model).prepend("<span>License Model: </span>"))
    $(".modal-footer").append($("<span class='date-created'>").text( data.date_created))
    $(".modal-footer").append($("<span class='place'>").text(data.city+"," +data.state_province+" - "+data.country))
    $divModelContent.append($("<p>").text(data.caption).prepend("<span>Caption: </span>"))

    return $divModelContent
  },

  handleClick: function(evt) {
    evt.preventDefault()
    var imageId = $(evt.target).parent()[0].id
    console.log(imageId);
    var imgUrl = $(evt.target).attr('src').replace(/\/thumb\//i, '/regular/');
    console.log(imgUrl)
    $.getJSON("api/v1/images/"+imageId, (response)=>{
      data = response.data.images[0]
      console.log(data);
      $('.modal-title').html(data.title)
      $('.modal-image').html(`<img src="${imgUrl}" />`)
      $('.modal-details').append(this.modalContent(data))
      $('.modal').modal({
        backdrop: 'static'
      })
    })
  },

  render: function(){
    const images = this.props.images.map((ig) => {
      return (
        ig.display_sizes.map((d_size)=>{
          return (
            <div key={ig.id} id={ig.id}>
              <img onClick={this.handleClick} src={d_size.uri}></img>
              <h3>{ig.title}</h3>
            </div>
          )
        })
      )
    })
    return (
      <div>
        {images}
      </div>
    )
  }
})
