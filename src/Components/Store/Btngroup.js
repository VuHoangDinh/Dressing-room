import React, { Component } from 'react';
import Button from './Button/Button';
import $ from 'jquery';
//import components

//impoty Data
import ButtonArray from '../Data/ButtonArray';
class Btngroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ButtonArray: ButtonArray
        }
    }
    render() {
        $(document).ready(function () {
            $(".btn-pref .btn").click(function () {
                $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
                // $(".tab").addClass("active"); // instead of this do the below 
                $(this).removeClass("btn-default").addClass("btn-primary");
            });
        });
        let elmButton = this.state.ButtonArray.map((buttonItem, index) => {
            return <Button key={index} buttonItem={buttonItem} />
        })
        return (
            <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                {elmButton}
            </div>
        );
    }
}

export default Btngroup;