# `My helper for react`

## `Css module`

### 1. Few classes in one element
#### {\`${obj.class1} ${obj.class2}\`} `or` {classes.dialogs__item + ' ' + classes.active}

## `Routing`

### 1. Wrap app in `<BrowserRouter>`
### 2. Use `Route` with `path` and `component`
	<BrowserRouter>
		<div className="app-wrapper">
			<Route path='/dialogs' component={Dialogs} />
			<Route path='/profile' component={Profile} />
		</div>
	</BrowserRouter>
### 3. Navigation menu item `<a href="/profile">Profile</a>` - will reload page
`or`
### 4. Use `NavLink` menu item `<NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>` - change page without reload

