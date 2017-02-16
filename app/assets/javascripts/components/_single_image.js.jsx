const SingleImage = React.createClass({

  modelContent: function(data){
    var $divModelContent = $("<div id='yanny'>")
    $divModelContent.append($("p").text(data.artist))
    $divModelContent.append($("p").text(data.artist_title))
    $divModelContent.append($("p").text(data.caption))
    $divModelContent.append($("p").text(data.city))
    $divModelContent.append($("p").text(data.country))
    $divModelContent.append($("p").text(data.date_created))
    $divModelContent.append($("p").text(data.state_province))
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
      // <DetailImage />
      $('.modal-title').html(data.title)
      $('.modal-body').html(`<img src="${imgUrl}" />`)
      $('.modal-body').append(this.modelContent(data))
      $('.modal').modal()
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
