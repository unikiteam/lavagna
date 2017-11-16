/**
 * This file is part of lavagna.

 * lavagna is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * lavagna is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with lavagna.  If not, see //www.gnu.org/licenses/>.
 */
package io.lavagna.model

enum class ColumnDefinition {
    OPEN {
        override // red
        val defaultColor: Int
            get() = 0xd9534f
    },
    CLOSED {
        override // green
        val defaultColor: Int
            get() = 0x5cb85c
    },
    BACKLOG {
        override // blue
        val defaultColor: Int
            get() = 0x428bca
    },
    DEFERRED {
        override // yellow
        val defaultColor: Int
            get() = 0xf0ad4e
    },
    TAX{
        override // pink
        val defaultColor: Int
            get() = 0xf4418e
    },
    LEGAL{
        override // royal_blue
        val defaultColor: Int
            get() = 0x5841f4
    },
    FINANCE{
        override // cyan
        val defaultColor: Int
            get() = 0x41f4c4
    },
    CLIENT{
        override // lime_greeen
        val defaultColor: Int
            get() = 0xc1f441
    },
    DONE{
        override // orange
        val defaultColor: Int
            get() = 0xf47941
    };

    abstract val defaultColor: Int
}
