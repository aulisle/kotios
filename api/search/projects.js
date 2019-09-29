const IDX_NAME = 'project'
const IDX_TYPE = 'project'

const userModule = {
  async projectIndexMapping() {
    const client = this.client()

    const idxExists = await client.indices.exists({
      index: IDX_NAME
    })

    if (!idxExists) {
      await client.indices.create({
        index: IDX_NAME
      })
    } else {
      await client.indices.delete({ index: IDX_NAME })
      await client.indices.create({
        index: IDX_NAME
      })
    }

    return client.indices.putMapping({
      index: IDX_NAME,
      type: IDX_TYPE,
      includeTypeName: true,
      body: {
        properties: {
          title: {
            type: 'text'
          },
          projectType: {
            type: 'integer'
          },
          tagline: {
            type: 'text'
          },
          values: {
            type: 'text'
          },
          phases: {
            type: 'object'
          },
          location: {
            type: 'geo_point'
          }
        }
      }
    })
  },

  async indexProject(project) {
    const client = this.client()

    try {
      await client.index({
        index: IDX_NAME,
        id: project.id.toString(),
        type: IDX_TYPE,
        body: {
          title: project.title,
          tagline: project.tagline,
          projectType: project.projectType,
          location: {
            lat: project.location.lat,
            lon: project.location.lng
          },
          thumbnail: project.thumbnail,
          phases: project.phases,
          values: project.values
        }
      })
    } catch (e) {
      //eslint-disable-next-line
      console.log('INDEXING ERROR', e)
    }
  },

  async searchProjects({ query, centre }) {
    const client = this.client()

    return client.search({
      index: IDX_NAME,
      type: IDX_TYPE,
      body: {
        query,
        sort: [
          {
            _geo_distance: {
              location: centre,
              order: 'asc',
              unit: 'km',
              distance_type: 'arc'
            }
          }
        ]
      }
    })
  }
}

export default userModule
