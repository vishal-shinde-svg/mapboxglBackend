import { GeoJSON, Geometry } from 'geojson';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'map' })
export class Mapg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  Name: string;

  // @Column({ nullable: true })
  // dis: string;

  @Column({ nullable: true })
  Property: string;

  @Index({ spatial: true })
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Geometry',
    srid: 4326,
    nullable: true,
  })
  Geom: GeoJSON;
}
