import React from 'react';
import User from './User/User';
import * as axios from 'axios';

const Users = (props) => {

	let follow = (id) => {
		props.follow(id);
	};

	let unfollow = (id) => {
		props.unfollow(id);
	};

	if (props.users.length === 0) {

		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers(response.data.items);
		});

		// [
		// 	{ id: 1, followed: true, photoUrl: 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg', fullname: 'Dima', status: 'Ok', location: { country: 'Ukraine', city: 'Kyiv' }, },
		// 	{ id: 2, followed: true, photoUrl: 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg', fullname: 'Sara', status: 'Mazal Tov', location: { country: 'Israel', city: 'Bat Yam' }, },
		// 	{ id: 3, followed: false, photoUrl: 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg', fullname: 'Jack', status: 'Protest', location: { country: 'USA', city: 'New York' }, },
		// 	{ id: 4, followed: false, photoUrl: 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg', fullname: 'Anna', status: 'Wife', location: { country: 'Ukraine', city: 'Kyiv' }, },
		// ]
	}

	let users = props.users.map((user) => (
		<User key={user.id} photos={user.photos} name={user.name} followed={user.followed} status={user.status}
			follow={follow} unfollow={unfollow} id={user.id} />
	));



	return (
		<div>
			{users}
		</div>
	)
}

export default Users;