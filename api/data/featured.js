const ITEM_COUNT = 5

const createItem = idx => {
  return {
    _id: idx,
    title: 'Torppala tontinluovutus',
    contentType: 'Ryhmähaku',
    description:
      'Torppala järjestää tontinluovutuskilpailun. Kaarinan ja Turun rajalla, ekologinen kylä Itämeren rannalla. ',
    previewImageUrl: `/torppala/torppala${idx % 2}.jpg`,
    projectId: '0'
  }
}

const create = () => {
  const $items = []

  for (let i = 0; i < ITEM_COUNT; i++) {
    $items.push(createItem(i))
  }

  return $items
}

const items = create()

export default items
