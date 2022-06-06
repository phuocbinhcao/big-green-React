import React, { Component } from "react";
import '../assets/css/comment.css';
import banana from '../assets/images/chuoi.png'

class Comment extends Component {
  render() {
    return (
      <div class="comment">
        <div class="comment-item">
          <h1>00</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            facilis ipsa deleniti mollitia, est exercitationem doloremque magnam
            excepturi, sed vero nisi inventore harum. Doloremque asperiores
            officiis, sequi distinctio neque quidem repellat illum possimus
            inventore suscipit quisquam magnam. Vero atque ad reprehenderit
            provident recusandae et itaque? Voluptate deleniti quas illo
            distinctio.
          </p>
          <h3>Cao Phước Bình</h3>
          <h4>CEO vinamilk</h4>
          <div class="comment-img">
            <img src={banana} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
