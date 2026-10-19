import test from 'node:test';
import assert from 'node:assert/strict';
import {chapters,trims,materials,suctionModel,steeringDemo,sourceLinks} from '../src/models.js';

test('the five chapter links are unique and ordered',()=>{
 assert.equal(chapters.length,5);
 assert.equal(new Set(chapters.map(c=>c.id)).size,5);
 assert.deepEqual(chapters.map(c=>c.number),['01','02','03','04','05']);
});
test('vehicle configuration boundaries are preserved',()=>{
 const performance=trims.find(t=>t.id==='performance');
 const thrust=trims.find(t=>t.id==='thrust');
 const rocket=trims.find(t=>t.id==='rocket');
 assert.equal(performance.direction,'none');
 assert.equal(thrust.direction,'forward');
 assert.equal(rocket.direction,'multi');
 assert.equal(rocket.seats,'01');
 assert.equal(thrust.seats,'02');
 assert.equal(performance.seats,'02');
});
test('suction schematic cannot indicate fan-generated pressure while switched off',()=>{
 for(const sealed of [false,true])assert.equal(suctionModel(false,sealed).lowPressure,0);
 assert(suctionModel(true,true).lowPressure>suctionModel(true,false).lowPressure);
 assert(suctionModel(true,false).lowPressure>0);
});
test('steering demo preserves center and direction and is less sensitive at higher speed',()=>{
 for(const mode of ['slow','fast'])assert.equal(steeringDemo(0,mode),0);
 for(const angle of [10,30,60]){
  assert.equal(steeringDemo(-angle,'slow'),-steeringDemo(angle,'slow'));
  assert.equal(steeringDemo(-angle,'fast'),-steeringDemo(angle,'fast'));
  assert(Math.abs(steeringDemo(angle,'fast'))<Math.abs(steeringDemo(angle,'slow')));
 }
});
test('material switches and primary citations remain complete',()=>{
 assert.deepEqual(materials.map(m=>m.id),['carbon','magnesium','titanium']);
 assert.equal(new URL(sourceLinks.article).hostname,'vnexpress.net');
 assert.equal(new URL(sourceLinks.tesla).hostname,'www.tesla.com');
 for(const material of materials)assert(material.note.length>30);
});
