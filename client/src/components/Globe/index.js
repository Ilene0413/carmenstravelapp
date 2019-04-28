import React, { Component } from "react";
import { Viewer } from "resium";
import { Cartesian3, Cartesian2, Color, LabelStyle, VerticalOrigin } from "cesium";
import ReactPlayer from 'react-player';

const divStyle = {
  width: 10,
  height: 10
};


class Globe extends Component {

  // when the viewer mounts add points to the globe
  //points are entities in cesium

  componentDidMount() {
    if (this.viewer) {
      this.viewer.entities.add({
        name: "Athens",
        position: Cartesian3.fromDegrees(23.725, 37.9838, 100),
        point: {
          pixelSize: 5,
          color: Color.GREEN,
          outlineWidth: 2
        },
        label: {
          text: "Athens",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "New York City",
        position: Cartesian3.fromDegrees(-74.0060, 40.7128, 500000),
        point: {
          pixelSize: 5,
          color: Color.YELLOW,
          outlineWidth: 2
        },
        label: {
          text: "NYC",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "London",
        position: Cartesian3.fromDegrees(0.1278, 51.5074, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "London",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Los Angeles",
        position: Cartesian3.fromDegrees(-118.2437, 34.0522, 500000),
        point: {
          pixelSize: 5,
          color: Color.PURPLE,
          outlineWidth: 2
        },
        label: {
          text: "Los Angeles",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Montreal",
        position: Cartesian3.fromDegrees(-73.5673, 45.5017, 500000),
        point: {
          pixelSize: 5,
          color: Color.YELLOW,
          outlineWidth: 2
        },
        label: {
          text: "Montreal",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Mexico City",
        position: Cartesian3.fromDegrees(-99.1332, 19.4326, 500000),
        point: {
          pixelSize: 5,
          color: Color.RED,
          outlineWidth: 2
        },
        label: {
          text: "Mexico City",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Toyoko",
        position: Cartesian3.fromDegrees(139.6503, 35.6762, 500000),
        point: {
          pixelSize: 5,
          color: Color.PINK,
          outlineWidth: 2
        },
        label: {
          text: "Toyoko",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Lima",
        position: Cartesian3.fromDegrees(-77.0528, -12.0464, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Lima",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Shanghai",
        position: Cartesian3.fromDegrees(121.4737, 31.2304, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Shanghai",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Sydney",
        position: Cartesian3.fromDegrees(151.2093, -33.8688, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Sydney",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Rio de Janiero",
        position: Cartesian3.fromDegrees(-43.1729, -22.9068, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Rio de Janiero",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Buenos Aires",
        position: Cartesian3.fromDegrees(-58.3816, -34.6037, 500000),
        point: {
          pixelSize: 5,
          color: Color.YELLOWGREEN,
          outlineWidth: 2
        },
        label: {
          text: "Buenos Aires",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Caracas",
        position: Cartesian3.fromDegrees(-74.0721, -4.7110, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUEVIOLET,
          outlineWidth: 2
        },
        label: {
          text: "Caracas",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Casablanca",
        position: Cartesian3.fromDegrees(7.5898, 33.5731, 500000),
        point: {
          pixelSize: 5,
          color: Color.GOLDENROD,
          outlineWidth: 2
        },
        label: {
          text: "Casablanca",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Lagos",
        position: Cartesian3.fromDegrees(3.3792, 6.5244, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Lagos",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Honolulu",
        position: Cartesian3.fromDegrees(-157.8583, 21.3069, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Honolulu",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Juno",
        position: Cartesian3.fromDegrees(-134.4197, 58.3019, 500000),
        point: {
          pixelSize: 5,
          color: Color.VIOLET,
          outlineWidth: 2
        },
        label: {
          text: "Juno",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Moscow",
        position: Cartesian3.fromDegrees(37.6173, 55.7558, 500000),
        point: {
          pixelSize: 5,
          color: Color.GAINSBORO,
          outlineWidth: 2
        },
        label: {
          text: "Moscow",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Antartica",
        position: Cartesian3.fromDegrees(-135.0000, -82.8628, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Antartica",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Iceland",
        position: Cartesian3.fromDegrees(-19.0208, 64.9631, 500000),
        point: {
          pixelSize: 5,
          color: Color.RED,
          outlineWidth: 2
        },
        label: {
          text: "Iceland",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Maldives",
        position: Cartesian3.fromDegrees(73.2207, 3.2028, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Maldives",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Phillipines",
        position: Cartesian3.fromDegrees(121.7740, 12.8797, 500000),
        point: {
          pixelSize: 5,
          color: Color.YELLOW,
          outlineWidth: 2
        },
        label: {
          text: "Phillipines",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Tel Aviv",
        position: Cartesian3.fromDegrees(34.7818, 32.0853, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Tel Aviv",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Dehli",
        position: Cartesian3.fromDegrees(77.12, 28.38, 500000),
        point: {
          pixelSize: 5,
          color: Color.PLUM,
          outlineWidth: 2
        },
        label: {
          text: "Dehli",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Mumbai",
        position: Cartesian3.fromDegrees(72.88261, 19.07283, 500000),
        point: {
          pixelSize: 5,
          color: Color.BURLYWOOD,
          outlineWidth: 2
        },
        label: {
          text: "Mumbai",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Cape Town",
        position: Cartesian3.fromDegrees(18.4241, -33.9249, 500000),
        point: {
          pixelSize: 5,
          color: Color.BLUE,
          outlineWidth: 2
        },
        label: {
          text: "Cape Town",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Dubai",
        position: Cartesian3.fromDegrees(55.2708, 25.2048, 500000),
        point: {
          pixelSize: 5,
          color: Color.BROWN,
          outlineWidth: 2
        },
        label: {
          text: "Dubai",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })
      this.viewer.entities.add({
        name: "Nairobi",
        position: Cartesian3.fromDegrees(36.8219, 1.2921, 500000),
        point: {
          pixelSize: 5,
          color: Color.ORANGE,
          outlineWidth: 2
        },
        label: {
          text: "Nairobi",
          font: '14pt monospace',
          style: LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -9)
        }
      })

    }
  }


  // render the viewer if there is a cesium entity 

  render() {
    return (

      <Viewer
        ref={e => {
          this.viewer = e ? e.cesiumElement : null;
        }}>
        <ReactPlayer url={[
    {src:"/music/carmensandiegotheme.m4a"}]} playing style={divStyle} />
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=fTxzGY7YnZE' playing style={divStyle} /> */}
    
    
      </Viewer>
    );
  }

}
export default Globe;