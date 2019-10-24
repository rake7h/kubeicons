import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

let template = {
  "sets": [{
    "name": "compute",
    "icons": [{
      "name": "pod",
      "labeled": {
        "svg": "url...",
        "png": "url..."
      },
      "unlabeled": {
        "svg": "url...",
        "png": "url..."
      }
    }]
  }
]}

class NewIcon extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     setName: '',
     iconName: '',
     labeledSVG: '',
     labeledPNG: '',
     unLabeledPNG: '',
     unLabeledSVG: '',
     template: '',
   };
   this.handleSubmit = this.handleSubmit.bind(this);
 }

   newIcon(setName, iconName, labeledUrlSvg, unLabeledUrlSvg, labeledUrlPng, unLabeledUrlPng) {
    let icon = {
      "name": iconName,
      "labeled": {
        "svg": labeledUrlSvg,
        "png": labeledUrlPng
      },
      "unlabeled": {
        "svg": unLabeledUrlSvg,
        "png": unLabeledUrlPng
      }
    }
    this.addNewIcon(setName, icon);
  }

   addNewIcon(newSetName, icon) {
   if(!icon) return;
   let indexOfSet;
   template.sets.forEach(function(set, index){
      if(set.name === newSetName) {
        indexOfSet = index;
      }
    });
    //if newSet exists, append the icons in it.
    if(indexOfSet >= 0) {
      console.log('template.sets[indexOfSet]',template.sets[indexOfSet])
      template.sets[indexOfSet].icons.push(icon);
    }
    // else create new set and push icons
    else {
      let newset= {};
      newset.name= newSetName;
      newset.icons = [icon];

      template.sets.push(newset);
      this.setState({template: template});
    }
    console.log('template',template);
  }

   handleSubmit(event) {
    event.preventDefault();
    this.newIcon(this.state.setName, this.state.iconName, this.state.labeledSVG, this.state.unLabeledSVG, this.state.labeledPNG, this.state.unLabeledPNG);
  }
render() {
  return (
    <div className="row">
      <div className="col-6">
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label>SetName</label>
          <input type="text" class="form-control" required name="inputSetName" value={this.state.setName} onChange={(e)=> this.setState({setName: e.target.value})} />
        </div>
        <div class="form-group">
          <label>icon Name</label>
          <input type="text" class="form-control" required name="inputIconName" value={this.state.iconName} onChange={(e)=> this.setState({iconName: e.target.value})}/>
        </div>
        <div class="form-group">
          <label>labeled SVG</label>
          <input type="text" class="form-control" required name="inputlabeledSVG" value={this.state.labeledSVG} onChange={(e)=> this.setState({labeledSVG: e.target.value})}/>
        </div>
        <div class="form-group">
          <label>unLabeled SVG</label>
          <input type="text" class="form-control" required name="inputUnlabeledSVG" value={this.state.unLabeledSVG} onChange={(e)=> this.setState({unLabeledSVG: e.target.value})}/>
        </div>
        <div class="form-group">
          <label>labeled PNG</label>
          <input type="text" class="form-control" required name="inputLabeledPNG" value={this.state.labeledPNG} onChange={(e)=> this.setState({labeledPNG: e.target.value})}/>
        </div>
        <div class="form-group">
          <label>unLabeled PNG</label>
          <input type="text" class="form-control" required name="inputUnlabeledPNG" value={this.state.unLabeledPNG} onChange={(e)=> this.setState({unLabeledPNG: e.target.value})}/>
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
        <div className="col-6">
          <SyntaxHighlighter language="json" style={docco}>
            {JSON.stringify(this.state.template, null, 2)}
          </SyntaxHighlighter>
        </div>
    </div>
  );
 }
}

export default NewIcon;
