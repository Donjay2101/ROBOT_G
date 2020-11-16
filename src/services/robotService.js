import * as utils from '../components/common/utils'; 

class RobotService{

       
    tableSize = {x: 5, y: 5};

    
    ToyRobot = {
      placed : false,
      direction : 'NORTH',
      position : {
        x : 0,
        y : 0
      }
    };

   

    runCommand=(command)=>{
            var splitCommannd = command.split('\n');
            console.log(splitCommannd);
            var result ='';
            splitCommannd.forEach((commandLine)=> {                
                if (commandLine.includes('PLACE')) {
                    this.placeRobot(commandLine);
                }
                if (commandLine == 'MOVE') {
                  this.moveRobot(this.ToyRobot);
                }
                if (commandLine == 'LEFT' || commandLine == 'RIGHT') {
                  this.changeDirection(commandLine)
                }
                if (commandLine == 'REPORT') {
                    result =this.reportRobot(this.ToyRobot);
                }
              });           
              return result;             
    };
    
    
    moveRobot = ()=>{
        if (this.ToyRobot.placed == false) {
            return false;
          }
    
          var x = this.ToyRobot.position.x;
          var y = this.ToyRobot.position.y;
    
          switch (this.ToyRobot.direction) {
            case 'NORTH':
              if (++y < this.tableSize.y) {
                this.ToyRobot.position = {x: x, y: y}
            }
              break;
            case 'EAST':
              if (++x < this.tableSize.x) {
                this.ToyRobot.position = {x: x, y: y}
              }
              break;
            case 'SOUTH':
              if (--y >= 0) {
                this.ToyRobot.position = {x: x, y: y};
              }
              break;
            case 'WEST':
              if (--x >= 0) {
                this.ToyRobot.position = {x: x, y: y}
              }
              break;
            default:
              break;
          }
    }

    placeRobot = (moves) => {
        moves = moves.split(/[ ,]+/);
        let placeCommand = moves[0], placeX = moves[1], placeY = moves[2], placeDirection = moves[3];

        if (placeCommand == "PLACE") {

            if (placeX >= 0 && placeX <= this.tableSize.x) {
                this.ToyRobot.position.x = placeX;
                this.ToyRobot.placed = true;
            } else {
                 return false
            }

            if (placeY >= 0 && placeY <= this.tableSize.y) {
                this.ToyRobot.position.y = placeY;
                this.ToyRobot.placed = true;
            } else {
                 return false
            }

            if(!utils.isNullOrWhiteSpace(placeDirection)){
              this.ToyRobot.direction = placeDirection;
            }  else{
              return false;
            }

            
        }
        else {
            alert("Failure! First command must be to place robot on table");
        }

    }


     validDirections = {
        NORTH: {
          LEFT: 'WEST',
          RIGHT: 'EAST'
        },
        EAST: {
          LEFT: 'NORTH',
          RIGHT: 'SOUTH'
        },
        SOUTH: {
          LEFT: 'EAST',
          RIGHT: 'WEST'
        },
        WEST: {
          LEFT: 'SOUTH',
          RIGHT: 'NORTH'
        }
      };

    changeDirection = (direction) => {
      
        if (this.ToyRobot.placed == false ) {
            return false;
          }
    
          let currentDirection = this.ToyRobot.direction;
          let newDirection = this.validDirections[currentDirection][direction];
          if(!utils.isNullOrWhiteSpace(newDirection)){
            this.ToyRobot.direction = newDirection;
          }
          
    }
    
    reportRobot= () => {
        if (this.ToyRobot.placed == false) {
            return false;
          }
    
          let endXPos = this.ToyRobot.position.x;
          let endYPos = this.ToyRobot.position.y;
          let endDirection = this.ToyRobot.direction;

          return `${endXPos}, ${endYPos}, ${endDirection}`;
    }
}

export default new RobotService();