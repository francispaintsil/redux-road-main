const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  const wagonReducer = (state=initialWagonState, action) => {
    switch(action.type){
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days ++        
        }
      }
      case 'travel': {
        if((20 * action.payload) > state.supplies){
          return state
        }else
        return {
          ...state,
          supplies: state.supplies-(20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: action.payload
        }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days ++
        }
      }
      default: {
        return state
      }
    }
  }
  let wagon = wagonReducer(undefined, {});
  wagon = wagonReducer(wagon, {
    type: 'travel',
    payload: 1
  })
  wagon = wagonReducer(wagon,{type:'gather'})
  wagon = wagonReducer(wagon, {type: 'tippedWagon'})
  wagon = wagonReducer(wagon, {type: 'travel', payload: 3})
  console.log(wagon);