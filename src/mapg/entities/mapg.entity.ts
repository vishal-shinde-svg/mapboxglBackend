import { GeoJSON, Geometry } from 'geojson';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'map' })
export class Mapg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  // @IsNotEmpty()
  name: string;

  // @IsNotEmpty()
  @Column()
  desc: string;

  @Column()
  properties: string;

  @Index({ spatial: true })
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Geometry',
    srid: 4326,
    // srid: 3857,
    nullable: true,
  })
  // @IsNotEmpty()
  geom: GeoJSON;
}
