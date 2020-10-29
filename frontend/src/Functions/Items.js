import { handleGet , handlePost } from './RequestHandler'

export const get_item = async() => {
	const res = await handleGet('get-item')
	return res
}

export const select_item = async(data) => {
    const res = await handleGet('select-item?itemid=' + data.itemid +'& selected=' + data.selected)
	return res
} 

export const add_item = async(data) => {
	const res = await handlePost('add-item',data)
	return res
}