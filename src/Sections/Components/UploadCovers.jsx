import React from "react";

const UploadCovers = () => {

    const upload = (e) => {
        console.log(e.target.value)
    }

    return (
        <div style={{width: '100%', height: '100dvh', position: 'fixed', top: '0', left: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{minWidth: '300px'}} class="ui placeholder segment">
                <div class="ui icon header">
                    <i class="image outline icon"></i>
                    Add album covers
                </div>
                <input onChange={upload} type={'file'} multiple style={{margin: '10px'}} class="ui primary button"/>
                <div class="ui basic button">Cancel</div>
            </div>
        </div>
    )
}

export default UploadCovers;