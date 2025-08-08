const reducer_function = (state: any, action: any) => {
  console.log("Dispatch received.");
  // Conventions vary, but this one is rather common - the action argument
  // should be an object with the type property; this determines what type
  // of action to carry out on the state.  The action can have other properties;
  // for example, some value to which some property of the state is to be changed

  // Note that these functions only affect the state - things like the visible cursor
  // position and playback rate of the audio must be made to depend on the state
  // (likely with useEffect) in order to work.
  switch (action.type) {
    // Example of dispatch call with no special parameters:
    // this object-join notation causes state to only change in one property, playing,
    // which becomes the opposite of what it was before.
    case "start/stop":
      return { ...state, ...{ playing: !state.playing } };

    case "update_piece_info":
      return {
        ...state,
        ...{
          tempo: action.tempo as number,
          beatsPerMeasure: action.beatsPerMeasure,
        },
      };
  
    // Here, it's decided that the mechanism to change the score also resets the play
    case "change_score":
      return {
        ...state,
        ...{
          score: action.score,
          accompanimentSound: action.accompanimentSound,
          playing: false,
        },
      };

    // Gets list of scores - without overwriting uploaded score
    case "new_scores_from_backend":
      var known_files = state.scores;
      var new_files = action.scores.filter(
        (filename: string) => !known_files.includes(filename),
      );
      console.log("New files are: ", new_files);
      return {
        ...state,
        ...{
          scores: [...state.scores, ...new_files],
        },
      };

      case "new_score_from_upload":
        return {
          ...state, // Keep the existing state
          scores: [...state.scores, action.score.filename], // Add the new score filename to the scores array
          score: action.score.filename, // Set the current score to the newly uploaded filename
          scoreContents: { 
            ...state.scoreContents, // Keep existing score content
            [action.score.filename]: action.score.content, // Add the new score content to the scoreContents object using the filename as the key
          },
        };

      case "change_reference_audio":
        // store the URI so ScoreFollower can pick it up
        console.log("[reducer] referenceAudioUri stored in state:", action.referenceAudioUri);
        return {
          ...state,
          referenceAudioUri: action.referenceAudioUri as string,
        };

      // New action to set estimated beat
      case "SET_ESTIMATED_BEAT":
        console.log("[reducer] Estimated beat:", action.payload);
        return {
          ...state,
          estimatedBeat: action.payload as number,
        };

      case "change_bottom_audio":
        // store the URI so ScoreFollower can pick it up
        console.log("[reducer] bottomAudioUri stored in state:", action.bottomAudioUri);
        return {
          ...state,
          bottomAudioUri: action.bottomAudioUri as string,
        };
        
      case "toggle_loading_performance":
        return {
          ...state,
          loadingPerformance: !state.loadingPerformance,
        };
        
    default: // If no valid type, return state, otherwise the function returns null and the state is gone.
      return state;
  }
};

export default reducer_function;
