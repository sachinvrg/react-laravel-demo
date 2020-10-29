<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Response;
use Validator;

class ItemController extends Controller
{
    
    //Add item
    public function add(Request $request)
    { 
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:30|min:1|unique:items',
        ]);
       
        if ($validator->fails())
        {
            return response()->json(array(
                'success' => false,
                'errors' => $validator->getMessageBag()->toArray()

            ), 400); // 400 being the HTTP code for an invalid request.
        }

        $item =  $this->create($request->all());     
      
        return Response::json([ 'success' => true,'msg'=>'Item Added successfully','data'=>$item]);
        
    }

    //get itemlist
    public function getItem(Request $request){

       $where =[];
        if(isset($request->type) && !empty($request->type)) {
            if($request->type == 'selected') {
                $where  = ['selected'=>'1'];
            }
            if($request->type == 'added') {
                $where  = ['selected'=>'0'];
            }
        }
        $itemList = Item::orderBy('updated_at','DESC')->where($where)->get();

        return Response::json([ 'success' => true,'data'=>$itemList]);

    }

    //select or deselect item 
    public function selectItem(Request $request)
    { 
        if(!isset($request->itemid) || isset($request->itemid) && empty($request->itemid)){
            return response()->json(array(
                'success' => false,
                'errors' => 'Item id is required'

            ), 400); // 400 being the HTTP code for an invalid request.
        }

        $selected = ['selected'=>'0'];
        
        if($request->selected == '1'|| $request->selected == 1) {

            $selected = ['selected'=>'1'];
        }
        
        if(Item::where('id', $request->itemid)->update($selected)) { 

            $updated = Item::where('id', $request->itemid)->first();

            $json = [ 'success' => true,'data'=>$updated];

        } else {
            $json = ['success' => false,'msg' => 'Please Select Valid Item'];
        }

        return Response::json($json);
        
    }
   
    public function create(array $data){

        return Item::create([
           'name' => $data['name'],
           'selected' => '0'
           ]);
    }
}
