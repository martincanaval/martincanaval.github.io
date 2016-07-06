const
  NONE    = 0,
  INT     = 1,
  FLOAT   = 2,
  STRING  = 3,
  DATE    = 4;


function convert(d, type) {
  value = d.trim() === ''? type.defaultValue : d;
  switch (type.type) {
    case INT: return parseInt(value);
    case FLOAT: return parseFloat(value);
  }
}

var attrTypeTsu = {
  'ID': {'type': INT, 'defaultValue': 0},
  'YEAR': {'type': INT, 'defaultValue': 0},
  'MONTH': {'type': INT, 'defaultValue': 0},
  'DAY': {'type': INT, 'defaultValue': 0},
  'HOUR': {'type': INT, 'defaultValue': 0},
  'MINUTE': {'type': INT, 'defaultValue': 0},
  'SECOND': {'type': INT, 'defaultValue': 0},
  'EVENT_VALIDITY': {'type': INT, 'defaultValue': 0},
  'CAUSE_CODE': {'type': INT, 'defaultValue': 0},
  'FOCAL_DEPTH': {'type': INT, 'defaultValue': 0},
  'PRIMARY_MAGNITUDE': {'type': FLOAT, 'defaultValue': 0},
  'COUNTRY': {'type': NONE, 'defaultValue': 0},
  'STATE': {'type': NONE, 'defaultValue': 0},
  'LOCATION_NAME': {'type': NONE, 'defaultValue': 0},
  'LATITUDE': {'type': FLOAT, 'defaultValue': 0},
  'LONGITUDE': {'type': FLOAT, 'defaultValue': 0},
  'REGION_CODE': {'type': INT, 'defaultValue': 0},
  'MAXIMUM_WATER_HEIGHT': {'type': FLOAT, 'defaultValue': 0},
  'ABE': {'type': NONE, 'defaultValue': 0},
  'IIDA': {'type': FLOAT, 'defaultValue': 0},
  'SOLOVIEV': {'type': FLOAT, 'defaultValue': 0},
  'WARNING_STATUS': {'type': FLOAT, 'defaultValue': 0},
  'DEATHS': {'type': INT, 'defaultValue': 0},
  'DEATHS_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'MISSING': {'type': INT, 'defaultValue': 0},
  'MISSING_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'INJURIES': {'type': INT, 'defaultValue': 0},
  'INJURIES_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'DAMAGE_MILLIONS_DOLLARS': {'type': FLOAT, 'defaultValue': 0},
  'DAMAGE_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'HOUSES_DESTROYED': {'type': INT, 'defaultValue': 0},
  'HOUSES_DESTROYED_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'HOUSES_DAMAGED': {'type': INT, 'defaultValue': 0},
  'HOUSES_DAMAGED_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'TOTAL_DEATHS': {'type': INT, 'defaultValue': 0},
  'TOTAL_DEATHS_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'TOTAL_MISSING': {'type': INT, 'defaultValue': 0},
  'TOTAL_MISSING_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'TOTAL_INJURIES': {'type': INT, 'defaultValue': 0},
  'TOTAL_INJURIES_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'TOTAL_DAMAGE_MILLIONS_DOLLARS': {'type': FLOAT, 'defaultValue': 0},
  'TOTAL_DAMAGE_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'TOTAL_HOUSES_DESTROYED': {'type': INT, 'defaultValue': 0},
  'TOTAL_HOUSES_DESTROYED_DESCRIPTION': {'type': INT, 'defaultValue': 0},
  'TOTAL_HOUSES_DAMAGED': {'type': INT, 'defaultValue': 0},
  'TOTAL_HOUSES_DAMAGED_DESCRIPTION': {'type': INT, 'defaultValue': 0}
};
var attrTypeVol = {

};

