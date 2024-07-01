'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    static associate({ Band, Event, Stage}) {
     
      // define association here
      setTimeout.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      setTimeout.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      setTimeout.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })



    }
  }
  Set_Time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      },
    stage_id: {     
       type: DataTypes.SMALLINT,
       allowNull: false,
       },
    band_id: {
       type: DataTypes.SMALLINT,
       allowNull: false,
    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName:'set_times',
    timestamps: false,
  });
  return Set_Time;
};