import React from "react";

class FooterForm extends React.Component {

    <form>
    <div id="parent">
        <p> </p>
        <br />
        <div id="left">
            <div className="form-control">
                <label> Name</label>
                <input name="name" type="text" />
            </div>
        </div>
        <div id="right">
            <div className="form-control">
                <label> Email</label>
                <input name="email" type="email" />
            </div>
        </div>
    </div>
    <div id="parent">
        <p> </p>
        <br />
        <div id="left">
            <div className="form-control">
                <label> Phone *</label>
                <input
                    type="tel"
                    name="phone"
                    required=""
                    placeholder="Enter your phone number"
                    maxlength="50"
                    value=""
                    style="padding-left: 5px"
                />
            </div>
        </div>
        <div id="right">
            <div className="form-control">
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    maxlength="250"
                    value=""
                    style="padding-left: 5px"
                />
            </div>
        </div>
    </div>
</form>
