# <span style="color: red;">`My helper for react`</span>
<span style="color: gold;"></span>

## <span style="color: gold;">`Css module`</span> 

	
### 1. Few classes in one element
#### {\`${obj.class1} ${obj.class2}\`} `or` {classes.dialogs__item + ' ' + classes.active}

## <span style="color: gold;">`Routing`</span> 

### 1. Wrap app in `<BrowserRouter>`
### 2. Use `Route` with `path` and `component`
	<BrowserRouter>
		<div className="app-wrapper">
			<Route path='/dialogs' component={Dialogs} />
			<Route path='/profile' component={Profile} /> - possibility to transfer data to component in Route
		</div>
	</BrowserRouter>
### `or` with `render` - give possibility to transfer data to component in Route
	<Route path='/profile' render={() => <Profile postsData={props.data.postsData} />} /> 
### 3. Navigation menu item `<a href="/profile">Profile</a>` - will reload page
### `or`
### 4. Use `NavLink` menu item `<NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>` - change page without reload

