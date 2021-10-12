import React from 'react'
import emailIcon from '../../../Content/icons/email-icon.png'

function Email() {

	return (
		<div id="navEmail">
			<a
                href="mailto:webdevjonah@gmail.com"
				type="email"
				id="logoLinkEmail"
				className="logoLink"
				target="_blank"
				rel="noreferrer"
			>
				<img src={emailIcon} alt="Email Logo" id="divEmail" className="navLogo" />
			</a>

		</div>
	);
}
export default Email;