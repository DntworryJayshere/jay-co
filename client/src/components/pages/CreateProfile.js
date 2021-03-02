import React, { Component } from 'react';
import ProfileForm from './../profile-form/ProfileForm';

class CreateProfile extends Component {
	render() {
		return (
			<>
				<div className="text-center align-self-center topping">
					<h2>Create Profile</h2>
					<span>
						WARNING: Refrain from entering sensitive information as the
						administrative routes of this application are public. This
						application should be viewed as a sample.
					</span>
				</div>

				<ProfileForm />
			</>
		);
	}
}

export default CreateProfile;
