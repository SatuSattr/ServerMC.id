<?php

namespace App\Enums;

enum ServerStatus: string
{
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';
    case Banned = 'banned';
}
