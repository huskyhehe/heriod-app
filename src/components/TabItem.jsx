function TabItem( props ) {
    return (
        <button 
            className={props.isActive ? 'tabitem' : 'tabitem tabitem--inactive'} 
            onClick={props.onItemClicked}
        >
            {props.title}
        </button>
    );
}

export default TabItem;