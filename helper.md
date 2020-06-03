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
### or with "render" - give possibility to transfer data to component in Route
	<Route path='/profile' render={() => <Profile postsData={props.data.postsData} />} /> 
### 3. Navigation menu item `<a href="/profile">Profile</a>` - will reload page
### `or`
### 4. Use `NavLink` menu item `<NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>` - change page without reload

## <span style="color: gold;">`React ref`</span> 

	let newPostElement = React.createRef();
	let addPost = () => {
		console.log(newPostElement.current.value);
	}
`- create references on DOM element `

## <span style="color: gold;">`Context`</span> 
### 1. Create variable with context:
	const StoreContext = React.createContext(null);
### 2. Wrap `App` by .Provider :
		<StoreContext.Provider value={store}>
			<App />
		</StoreContext.Provider>
### 3. Use in component
		const MyPostsContainer = () => {
			return (<StoreContext.Consumer>
					{(store) => {
							let state = store.getState();
							return <MyPosts posts={state.profilePage.posts} />
						}}
				</StoreContext.Consumer>
			)}

## <span style="color: gold;">`React-redux`</span> 
### 1. Wrap `App` by `Provider` from `react-redux`
	<Provider store={store}>	<App />	</Provider> 
### 2. Use `connect` function with two calls
	const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

- mapStateToProps(state) - function wich return object with state
- mapDispatchToProps(dispath) - function wich return object with methods
- MyPosts - render component






# <span style="color: gold;">`GIT`</span> 

### gitk --all&     (открыть графическую оболочку гита, чтобы позырить все коммиты)
### ctrl + insert (копировать в буфер обмена) 
### shift + insert (вставить из буфера обмена) 
### git checkout commit-number (переключится на нужный коммит)