/**
 * json generator for kubeicons
 */
 
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

let myStorage = window.localStorage;
class NewIcon extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     setName: '',
     iconLabel:'',
     iconName: '',
     iconDes:'',
     labeledSVG: '',
     labeledPNG: '',
     unLabeledPNG: '',
     unLabeledSVG: '',
     template: '',
   };
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 componentDidMount() {
   this.initStorage();
 }
 initStorage() {
   if(!myStorage.getItem('iconsJson')) {
     let root = {
     	"sets": []
     }
     myStorage.setItem('iconsJson',JSON.stringify(root, null, 2));
   };
   this.setState({template: myStorage.getItem('iconsJson')});
 }
 clearStorage() {
   let root = {
     "sets": []
   }
   myStorage.setItem('iconsJson',JSON.stringify(root, null, 2));
   this.setState({template: myStorage.getItem('iconsJson')});
 }
   newIcon(setName, iconName, iconLabel, iconDes, labeledUrlSvg, unLabeledUrlSvg, labeledUrlPng, unLabeledUrlPng) {
    let setPath = 'resources';
    if(setName === 'cpComponent') {
      setPath = 'control_plane_components'
    }
    if(setName === 'infraComponent') {
      setPath = 'infrastructure_components'
    }

    let iconPath = {
      "labeled": {
        "svg": `icons/svg/${setPath}/labeled/${iconName}.svg`,
        "png": `icons/png/${setPath}/labeled/${iconName}-128.png`
      },
      "unlabeled": {
        "svg": `icons/svg/${setPath}/unlabeled/${iconName}.svg`,
        "png": `icons/png/${setPath}/unlabeled/${iconName}-128.png`
      }
    }

    let icon = {
      "name": iconName,
      "label": iconLabel,
      "description": iconDes,
      "labeled": {
        "svg": iconPath.labeled.svg,
        "png": iconPath.labeled.png
      },
      "unlabeled": {
        "svg": iconPath.unlabeled.svg,
        "png": iconPath.unlabeled.png
      }
    }
    this.addNewIcon(setName, icon);
  }

   addNewIcon(newSetName, icon) {
     if(!icon) return;
     let indexOfSet;
     let template = JSON.parse(this.state.template);
     template.sets.forEach(function(set, index){
        if(set.name === newSetName) {
          indexOfSet = index;
        }
      });
      //if newSet exists, append the icons in it.
      if(indexOfSet >= 0) {
        template.sets[indexOfSet].icons.push(icon);
      }
      // else create new set and push icons
      else {
        let newset= {};
        newset.name= newSetName;
        newset.icons = [icon];
        template.sets.push(newset);
      }
      // set the updated icons

    myStorage.setItem('iconsJson',JSON.stringify(template, null, 2));
    this.setState({template: myStorage.getItem('iconsJson')});
    this.setState({iconName: ''});
    this.setState({iconLabel: ''});
    this.setState({iconDes: ''});
    this.setState({labeledSVG: ''});
    this.setState({labeledPNG: ''});
    this.setState({unLabeledPNG: ''});
    this.setState({unLabeledSVG: ''});
  }

   handleSubmit(event) {
    event.preventDefault();
    this.newIcon(this.state.setName, this.state.iconName, this.state.iconLabel, this.state.iconDes, this.state.labeledSVG, this.state.unLabeledSVG, this.state.labeledPNG, this.state.unLabeledPNG);
  }
render() {
  return (
    <div className="row">
      <div className="col-4">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>SetName</label>
          <input type="text" className="form-control" required name="inputSetName" value={this.state.setName} onChange={(e)=> this.setState({setName: e.target.value})} />
        </div>
        <div className="form-group">
          <label>icon Name</label>
          <input type="text" className="form-control" required name="inputIconName" value={this.state.iconName} onChange={(e)=> this.setState({iconName: e.target.value})}/>
        </div>
        <div className="form-group">
          <label>icon Label</label>
          <input type="text" className="form-control" required name="inputIconLabel" value={this.state.iconLabel} onChange={(e)=> this.setState({iconLabel: e.target.value})}/>
        </div>
        <div className="form-group">
          <label>icon Description</label>
          <input type="text" className="form-control" required name="inputIconDec" value={this.state.iconDes} onChange={(e)=> this.setState({iconDes: e.target.value})}/>
        </div>

        <input type="submit" value="Submit" className="btn btn-primary btn-sm mb-2" />
      </form>
      <button className="btn btn-secondary btn-sm" onClick={()=>this.clearStorage()}>Clear</button>
      </div>
        <div className="col-8">
          <SyntaxHighlighter language="json" style={docco} className="h-600">
            {this.state.template}
          </SyntaxHighlighter>
        </div>
    </div>
  );
 }
}

export default NewIcon;
