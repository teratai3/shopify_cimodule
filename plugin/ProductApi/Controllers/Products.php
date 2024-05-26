<?php

namespace Plugin\ProductApi\Controllers;

use CodeIgniter\API\ResponseTrait;
use Plugin\ShopifyAuth\Controllers\Api\ApiBaseController;


class Products extends ApiBaseController
{
    use ResponseTrait;

    public function index(){
        return $this->respond([
            "data" => $this->getShopifySDK()->Product->get(),
        ]);
    }
}
