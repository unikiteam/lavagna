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
    TAX {
        override // red
        val defaultColor: Int
            get() = 0xd9534f
    },
    LEGAL {
        override // green
        val defaultColor: Int
            get() = 0x5cb85c
    },
    FINANCE {
        override // blue
        val defaultColor: Int
            get() = 0x428bca
    },
    CLIENT {
        override // yellow
        val defaultColor: Int
            get() = 0xf0ad4e
    },
    DONE {
        override // yellow
        val defaultColor: Int
        get() = 0x997300
    };

    abstract val defaultColor: Int
}
